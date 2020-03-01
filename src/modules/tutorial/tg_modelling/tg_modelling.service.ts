import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult, getRepository, getConnection } from 'typeorm';
import { Tg_ModellingRepository } from "./tg_modelling.repository";
import { Tg_ModellingEntity } from './tg_modelling.entity';
import { Modelling_QuestionEntity } from '../modelling_question/modelling_question.entity';
import { Modelling_Question_RulesEntity } from '../modelling_question_rules/modelling_question_rules.entity';
import { Modelling_RulesEntity } from '../modelling_rules/modelling_rules.entity';
import { Modelling_QuestionDto } from '../modelling_question/dto/Modelling_QuestionDto';
import { Tg_ModellingModule } from './tg_modelling.module';
import { TestEntity } from '../test/test.entity';
import { Modelling_QuestionModule } from '../modelling_question/modelling_question.module';
import { json } from 'body-parser';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { parseStringPromise } from 'xml2js';
import { ApiGatewayManagementApi } from 'aws-sdk';
import { UtilsService } from 'providers/utils.service';
import { List } from 'lodash';

@Injectable()
export class Tg_ModellingService {
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Tg_ModellingRepository
    ) {
    }
    /**
     * Returns the Modelling_Qs_Entity with the ID:
     * @param qs_id and the Langauge:
     * @param lang 
     */
    async getSpecificQs(qs_id: any, lang: any) {
        let request = ""
        let request_desc = ""
        if(lang == 'de'){
            request = "modelling_question.mod_qs_question_text_de"
            request_desc = "modelling_question.mod_qs_question_description_de"
        }
        if(lang == 'en'){
            request = "modelling_question.mod_qs_question_text"
            request_desc = "modelling_question.mod_qs_question_description"
        }

        let result = await getRepository(Modelling_QuestionEntity)
        .createQueryBuilder('modelling_question')
        .select(request,"question_text")
        .addSelect(request_desc,"question_description")
        .addSelect("modelling_question.mod_qs_id","id")
        .where("modelling_question.mod_qs_id = :mod_qs_id",{mod_qs_id:qs_id})
        .getRawOne();
       
        return result;
    }
    async getModQS() {
        let result = await getRepository(Modelling_QuestionEntity)
        .createQueryBuilder('modelling_question')
        .select("modelling_question.mod_qs_question_text_de","question_text")
        //.addSelect("modelling_question.mod_qs_question_text_de","question_text_de")
        .addSelect("mod_qs_rules.modelling_question_rule_name","qs_rule_name")
        .addSelect("mod_rules.modelling_rule_text","mod_r_text")
        .addSelect("mod_rules.modelling_rule_text_de","mod_r_text_de")
        .innerJoin(Modelling_Question_RulesEntity,"mod_qs_rules","modelling_question.mod_qs_custom_ruleset = mod_qs_rules.modelling_question_id::VARCHAR")
        .innerJoin(Modelling_RulesEntity,"mod_rules","mod_qs_rules.modelling_question_id::VARCHAR = mod_rules.modelling_rule_id")
        .getRawMany();
       
        console.log(result)
        return result
    }
    /**
     * Puts the solved Question in the Database for the User:
     * @param user_id and the Question:
     * @param qs_id 
     * @Param xml 
     */
    async solveQuestion(user_id: string,qs_id:string ,user_xml:any, lang: string, duration:number) {
        //Just Language things
        let request_xml = ""
        let request_svg = ""
        //Change Requests according to Langugage
        if(lang == 'de'){
            request_xml = "modelling_rules.modelling_rule_text_de"
            request_svg = "modelling_rules.modelling_rule_svg_de"
        }
        if(lang == 'en'){
            request_xml = "modelling_rules.modelling_rule_text"
            request_svg = "modelling_rules.modelling_rule_svg"
        }
        //Get The DTO for the solved Question
        const mult_qs_id = await getRepository(Modelling_QuestionEntity)
        .createQueryBuilder("modelling_question")
        .where("modelling_question.mod_qs_id = :mod_qs_id",{mod_qs_id:qs_id})
        .getOne();
        console.log("Question ID")
        console.log(mult_qs_id)
        //Get the corresponding Answer
        //Get DTOs for all answers given
        //Right now, only 1 solutions should be found 
        const all_Answers = await getRepository(Modelling_Question_RulesEntity)
        .createQueryBuilder("modelling_question_rules")
        .select("modelling_question_rules.modelling_question_rule_name","name")
        .addSelect(request_xml,"xml")
        .addSelect(request_svg,"svg")
        .innerJoin(Modelling_RulesEntity,"modelling_rules","modelling_rules.modelling_rule_id = modelling_question_rules.modelling_question_id::VARCHAR")
        .innerJoin(Modelling_QuestionEntity,"modelling_question","modelling_question.mod_qs_custom_ruleset = modelling_rules.modelling_rule_id")
        .where("modelling_question_rules.modelling_question_id = :modelling_question_id",{modelling_question_id:mult_qs_id.mod_qs_custom_ruleset})
        .getRawOne();
        //DO stuff
        console.log("Matching SVG AND XML")
        console.log(all_Answers)
        //Validate Diagramm
        let score = 0
        
        score = await this.validate(all_Answers.xml,user_xml)
        //Put solved xml,score and user to Database
        //Put Question in Database
        const seedTgMod = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Tg_ModellingEntity)
        .values([{
            tg_modelling_question_id:qs_id,
            tg_modelling_xml_providet:all_Answers.xml,
            tg_modelling_validation_score:score,
            tg_modelling_editing_duration:duration
        }]).execute();
        //Put given Answers in Database
        const seedTest = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(TestEntity)
        .values([{
            test_solved_test_id: seedTgMod.identifiers[0].tg_modelling_id,
            test_user_id: user_id,
            test_categorie: mult_qs_id.mod_qs_categories,
        }]).execute();
        //create Returnclass for json
        let ret: ReturnSVGAndSCORE = new ReturnSVGAndSCORE(all_Answers.svg,score)
        //return Returnclass
        console.log(ret) 
       
        return ret
    }
    /**
     * Method to validate two XML FILes
     */
    async validate(camunda_xml_from_database: String, bpmn_io_xml_from_user: string) {
        //Parse USER XML
        let bpmn_from_user = await parseStringPromise(bpmn_io_xml_from_user);
        bpmn_from_user = (JSON.parse(JSON.stringify(bpmn_from_user)));
        //Go to relevant process
        let bpmn_from_user_lvl1 = bpmn_from_user['bpmn2:definitions']
        let bpmn_from_user_lvl2 = bpmn_from_user_lvl1['bpmn2:process']
        //Parse DB XML
        let bpmn_from_db = await parseStringPromise(camunda_xml_from_database);
        bpmn_from_db = (JSON.parse(JSON.stringify(bpmn_from_db)));
        //Go to relevant process
        let bpmn_from_db_lvl1 = bpmn_from_db['bpmn:definitions']
        let bpmn_from_db_lvl2
        let map_from_database 
        console.log("BPMN")
        console.log(bpmn_from_db)
        
        if(bpmn_from_db_lvl1 == undefined){
            bpmn_from_db_lvl1 = bpmn_from_db['definitions']
            bpmn_from_db_lvl2 = bpmn_from_db_lvl1['process']
            map_from_database = this.createComparisonMapForCAMUNDAV2(bpmn_from_db_lvl2)
            console.log(bpmn_from_db_lvl2)
        }else{
            
            bpmn_from_db_lvl2 = bpmn_from_db_lvl1['bpmn:process']
            map_from_database = this.createComparisonMapForCAMUNDA(bpmn_from_db_lvl2)
        }
        //Get Maps from XML FIles
        let map_for_user = this.createComparisonMapForBPMNIO(bpmn_from_user_lvl2)
        
        //Compare Maps, get Score
        let returnscore = this.compareMaps(map_for_user,map_from_database)
        //return score
        
        return returnscore
    }
    /**
     * Methode to compare two Maps 
     */
    compareMaps(map_for_user: Map<string, Map<string, any>>, map_from_database: Map<string, Map<string, any>>) {
        //Map to display the results.
        //EVERY entry in the number colum represents a bonus for the USER
        let resultMap: Map<string,number> = new Map()
        //Create USER success MAP
        map_for_user.forEach((value_user,key_user)=>{
            map_from_database.forEach((value_db,key_db)=>{
               if(key_user == key_db){
                   console.log("Name Hit")
                   resultMap.set(key_db,20)
                   if(value_user.get("name") != undefined){
                    console.log("Name HIT")
                    resultMap.set(key_db+"name",5)
                   }
                   if(value_user.get("incoming") == value_db.get("incoming")&& value_db.get('incoming') != undefined){
                    console.log("INC HIT")
                    resultMap.set(key_db+"incoming",10)
                   }
                   if(value_user.get("outgoing") == value_db.get("outgoing")&& value_db.get('outgoing') != undefined){
                    console.log("OUTG HIT")
                    resultMap.set(key_db+"outgoing",10)
                   }
               }
            })
        })
        //Create Possible MAP
        let bestPossibility: Map<string,number> = new Map()
        map_from_database.forEach((value_db,key_db)=>{
                bestPossibility.set(key_db,20)
                if(value_db.get("name") != undefined){
                    console.log("Name HIT")
                    bestPossibility.set(key_db+"name",5)
                }
                if(value_db.get("incoming")!= undefined){
                    console.log("INC HIT")
                    bestPossibility.set(key_db+"incoming",10)
                }
                if(value_db.get("outgoing")!= undefined){
                    console.log("OUTG HIT")
                    bestPossibility.set(key_db+"outgoing",10)
                }
            }
        )
        //Count result of possible MAP
        let bestPossible = 0
        bestPossibility.forEach((value,key)=>{
            bestPossible = bestPossible+value
        })
        let userResult = 0
        resultMap.forEach((value,key)=>{
            userResult = userResult+value
        })
        console.log("Map DB")
        console.log(bestPossibility)
        console.log(bestPossible)
        console.log("Map User")
        console.log(resultMap)
        console.log(userResult)

        let ret = (userResult/bestPossible)*100
        ret = Math.floor(ret)
        return ret
    }

    createQueryBuilder(alias: string = 'tg_modelling', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_ModellingEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }
    /**
     * Parse BPMNIO XMl file to Comparison Map
     * @param bpmn_from_user_lvl2 
     */
    createComparisonMapForBPMNIO(bpmn_from_user_lvl2){
        console.log("START PARSING IO")
        let parse: Map<string,Map<string,any>> = new Map()
        bpmn_from_user_lvl2.forEach(e=>{
            console.log("BPMN")
            console.log(e)
            if(e['bpmn2:startEvent'] != undefined){
                let i = 0
                e['bpmn2:startEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    console.log(e['bpmn2:startEvent'])
                    let name = e['bpmn2:startEvent'][0]['$']['name']
                    let eventName = 'Startevent'+i
                    let outgoing = e['bpmn2:startEvent'][0]['bpmn2:outgoing'].length
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn2:endEvent'] != undefined){
                let i = 0
                e['bpmn2:endEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:endEvent'][0]['$']['name']
                    let eventName = 'Endevent'+i
                    let incoming = e['bpmn2:endEvent'][0]['bpmn2:incoming'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:exclusiveGateway'] != undefined){
                let i = 0
                e['bpmn2:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:exclusiveGateway'][0]['$']['name']
                    let eventName = 'ExclusiveGateway'+i
                    let incoming = e['bpmn2:exclusiveGateway'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:exclusiveGateway'][0]['bpmn2:outgoing'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:participant'] != undefined){
                let i = 0
                e['bpmn2:participant'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:participant'][0]['$']['name']
                    let eventName = 'Participant'+i
                    console.log(name)
                    console.log(eventName)
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:lane'] != undefined){
                let i = 0
                e['bpmn2:lane'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:lane'][0]['$']['name']
                    let eventName = 'Lane'+i
                    console.log(name)
                    console.log(eventName)
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:flowNodeRef'] != undefined){
                let i = 0
                e['bpmn2:flowNodeRef'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'FlowNodeRef'+i
                    console.log(eventName)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:sequenceFlow'] != undefined){
                let i = 0
                e['bpmn2:sequenceFlow'].forEach(ele=>{
                    console.log()
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:sequenceFlow'][0]['$']['name']
                    let eventName = 'SequenceFlow'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:subProcess'] != undefined){
                let i = 0
                e['bpmn2:subProcess'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:subProcess'][0]['$']['name']
                    let eventName = 'subProcess'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:parallelGateway'] != undefined){
                let i = 0
                e['bpmn2:parallelGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ParallelGateway'+i
                    let incoming = e['bpmn2:parallelGateway'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:parallelGateway'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:exclusiveGateway'] != undefined){
                let i = 0
                e['bpmn2:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ExclusiveGateway'+i
                    let name = e['bpmn2:exclusiveGateway'][0]['$']['name']
                    let incoming = e['bpmn2:exclusiveGateway'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:exclusiveGateway'][0]['bpmn2:outgoing'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:complexGateway'] != undefined){
                let i = 0
                e['bpmn2:complexGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ComplexGateway'+i
                    let incoming = e['bpmn2:complexGateway'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:complexGateway'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:inclusiveGateway'] != undefined){
                let i = 0
                e['bpmn2:inclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'InclusiveGateway'+i
                    let incoming = e['bpmn2:inclusiveGateway'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:inclusiveGateway'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:eventBasedGateway'] != undefined){
                let i = 0
                e['bpmn2:eventBasedGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'EventBasedGateway'+i
                    let incoming = e['bpmn2:eventBasedGateway'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:eventBasedGateway'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:intermediateCatchEvent'] != undefined){
                let i = 0
                e['bpmn2:intermediateCatchEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateCatchEvent'+i
                    let name = e['bpmn2:intermediateCatchEvent'][0]['$']['name']
                    let incoming = e['bpmn2:intermediateCatchEvent'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:intermediateCatchEvent'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:intermediateThrowEvent'] != undefined){
                let i = 0
                e['bpmn2:intermediateThrowEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateThrowEvent'+i
                    let name = e['bpmn2:intermediateThrowEvent'][0]['$']['name']
                    let incoming = e['bpmn2:intermediateThrowEvent'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:intermediateThrowEvent'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:boundaryEvent'] != undefined){
                let i = 0
                e['bpmn2:boundaryEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BoundaryEvent'+i
                    let name = e['bpmn2:boundaryEvent'][0]['$']['name']
                    let incoming = e['bpmn2:boundaryEvent'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:boundaryEvent'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:task'] != undefined){
                let i = 0;
                e['bpmn2:task'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'Task'+i
                    let name = e['bpmn2:task'][0]['$']['name']
                    let incoming = e['bpmn2:task'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:task'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn2:manualTask'] != undefined){
                let i = 0;
                e['bpmn2:manualTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ManualTask'+i
                    let name = e['bpmn2:manualTask'][0]['$']['name']
                    let incoming = e['bpmn2:manualTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:manualTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:sendTask'] != undefined){
                let i = 0;
                e['bpmn2:sendTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'SendTask'+i
                    let name = e['bpmn2:sendTask'][0]['$']['name']
                    let incoming = e['bpmn2:sendTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:sendTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:receiveTask'] != undefined){
                let i = 0;
                e['bpmn2:receiveTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ReceiveTask'+i
                    let name = e['bpmn2:receiveTask'][0]['$']['name']
                    let incoming = e['bpmn2:receiveTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:receiveTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:scriptTask'] != undefined){
                let i = 0;
                e['bpmn2:scriptTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ScriptTask'+i
                    let name = e['bpmn2:scriptTask'][0]['$']['name']
                    let incoming = e['bpmn2:scriptTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:scriptTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:userTask'] != undefined){
                let i = 0;
                e['bpmn2:userTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'UserTask'+i
                    let name = e['bpmn2:userTask'][0]['$']['name']
                    let incoming = e['bpmn2:userTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:userTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:businessRuleTask'] != undefined){
                let i = 0;
                e['bpmn2:businessRuleTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BusinessRuleTask'+i
                    let name = e['bpmn2:businessRuleTask'][0]['$']['name']
                    let incoming = e['bpmn2:businessRuleTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:businessRuleTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:serviceTask'] != undefined){
                let i = 0;
                e['bpmn2:serviceTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ServiceTask'+i
                    let name = e['bpmn2:serviceTask'][0]['$']['name']
                    let incoming = e['bpmn2:serviceTask'][0]['bpmn2:incoming'].length
                    let outgoing = e['bpmn2:serviceTask'][0]['bpmn2:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:dataObject'] != undefined){
                let i = 0;
                e['bpmn2:dataObject'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'DataObject'+i
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:dataObjectReference'] != undefined){
                let i = 0;
                e['bpmn2:dataObjectReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    console.log(e['bpmn2:dataObjectReference'])
                    let name = e['bpmn2:dataObjectReference'][0]['$']['name']
                    let eventName = 'DataObjectReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn2:dataStoreReference'] != undefined){
                let i = 0;
                e['bpmn2:dataStoreReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn2:dataStoreReference'][0]['$']['name']
                    let eventName = 'DataStoreReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }


        })
        return parse
    }
    /**
     * Parse Camunda XML file to Comparison Map
     * @param bpmn_from_user_lvl2 
     */
    createComparisonMapForCAMUNDA(bpmn_from_user_lvl2){
        console.log("START PARSING Camunda")
        let parse: Map<string,Map<string,any>> = new Map()
        bpmn_from_user_lvl2.forEach(e=>{
            console.log("BPMN")
            console.log(e)
            if(e['bpmn:startEvent'] != undefined){
                let i = 0
                e['bpmn:startEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    console.log(e['bpmn:startEvent'])
                    let name = e['bpmn:startEvent'][0]['$']['name']
                    let eventName = 'Startevent'+i
                    let outgoing = e['bpmn:startEvent'][0]['bpmn:outgoing'].length
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn:endEvent'] != undefined){
                let i = 0
                e['bpmn:endEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:endEvent'][0]['$']['name']
                    let eventName = 'Endevent'+i
                    let incoming = e['bpmn:endEvent'][0]['bpmn:incoming'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:exclusiveGateway'] != undefined){
                let i = 0
                e['bpmn:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:exclusiveGateway'][0]['$']['name']
                    let eventName = 'ExclusiveGateway'+i
                    let incoming = e['bpmn:exclusiveGateway'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:exclusiveGateway'][0]['bpmn:outgoing'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:participant'] != undefined){
                let i = 0
                e['bpmn:participant'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:participant'][0]['$']['name']
                    let eventName = 'Participant'+i
                    console.log(name)
                    console.log(eventName)
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:lane'] != undefined){
                let i = 0
                e['bpmn:lane'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:lane'][0]['$']['name']
                    let eventName = 'Lane'+i
                    console.log(name)
                    console.log(eventName)
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:flowNodeRef'] != undefined){
                let i = 0
                e['bpmn:flowNodeRef'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'FlowNodeRef'+i
                    console.log(eventName)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:sequenceFlow'] != undefined){
                let i = 0
                e['bpmn:sequenceFlow'].forEach(ele=>{
                    console.log()
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:sequenceFlow'][0]['$']['name']
                    let eventName = 'SequenceFlow'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:subProcess'] != undefined){
                let i = 0
                e['bpmn:subProcess'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:subProcess'][0]['$']['name']
                    let eventName = 'subProcess'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:parallelGateway'] != undefined){
                let i = 0
                e['bpmn:parallelGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ParallelGateway'+i
                    let incoming = e['bpmn:parallelGateway'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:parallelGateway'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:exclusiveGateway'] != undefined){
                let i = 0
                e['bpmn:exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ExclusiveGateway'+i
                    let name = e['bpmn:exclusiveGateway'][0]['$']['name']
                    let incoming = e['bpmn:exclusiveGateway'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:exclusiveGateway'][0]['bpmn:outgoing'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:complexGateway'] != undefined){
                let i = 0
                e['bpmn:complexGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ComplexGateway'+i
                    let incoming = e['bpmn:complexGateway'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:complexGateway'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:inclusiveGateway'] != undefined){
                let i = 0
                e['bpmn:inclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'InclusiveGateway'+i
                    let incoming = e['bpmn:inclusiveGateway'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:inclusiveGateway'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:eventBasedGateway'] != undefined){
                let i = 0
                e['bpmn:eventBasedGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'EventBasedGateway'+i
                    let incoming = e['bpmn:eventBasedGateway'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:eventBasedGateway'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:intermediateCatchEvent'] != undefined){
                let i = 0
                e['bpmn:intermediateCatchEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateCatchEvent'+i
                    let name = e['bpmn:intermediateCatchEvent'][0]['$']['name']
                    let incoming = e['bpmn:intermediateCatchEvent'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:intermediateCatchEvent'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:intermediateThrowEvent'] != undefined){
                let i = 0
                e['bpmn:intermediateThrowEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateThrowEvent'+i
                    let name = e['bpmn:intermediateThrowEvent'][0]['$']['name']
                    let incoming = e['bpmn:intermediateThrowEvent'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:intermediateThrowEvent'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:boundaryEvent'] != undefined){
                let i = 0
                e['bpmn:boundaryEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BoundaryEvent'+i
                    let name = e['bpmn:boundaryEvent'][0]['$']['name']
                    let incoming = e['bpmn:boundaryEvent'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:boundaryEvent'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:task'] != undefined){
                let i = 0;
                e['bpmn:task'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'Task'+i
                    let name = e['bpmn:task'][0]['$']['name']
                    let incoming = e['bpmn:task'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:task'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['bpmn:manualTask'] != undefined){
                let i = 0;
                e['bpmn:manualTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ManualTask'+i
                    let name = e['bpmn:manualTask'][0]['$']['name']
                    let incoming = e['bpmn:manualTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:manualTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:sendTask'] != undefined){
                let i = 0;
                e['bpmn:sendTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'SendTask'+i
                    let name = e['bpmn:sendTask'][0]['$']['name']
                    let incoming = e['bpmn:sendTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:sendTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:receiveTask'] != undefined){
                let i = 0;
                e['bpmn:receiveTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ReceiveTask'+i
                    let name = e['bpmn:receiveTask'][0]['$']['name']
                    let incoming = e['bpmn:receiveTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:receiveTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:scriptTask'] != undefined){
                let i = 0;
                e['bpmn:scriptTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ScriptTask'+i
                    let name = e['bpmn:scriptTask'][0]['$']['name']
                    let incoming = e['bpmn:scriptTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:scriptTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:userTask'] != undefined){
                let i = 0;
                e['bpmn:userTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'UserTask'+i
                    let name = e['bpmn:userTask'][0]['$']['name']
                    let incoming = e['bpmn:userTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:userTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:businessRuleTask'] != undefined){
                let i = 0;
                e['bpmn:businessRuleTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BusinessRuleTask'+i
                    let name = e['bpmn:businessRuleTask'][0]['$']['name']
                    let incoming = e['bpmn:businessRuleTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:businessRuleTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:serviceTask'] != undefined){
                let i = 0;
                e['bpmn:serviceTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ServiceTask'+i
                    let name = e['bpmn:serviceTask'][0]['$']['name']
                    let incoming = e['bpmn:serviceTask'][0]['bpmn:incoming'].length
                    let outgoing = e['bpmn:serviceTask'][0]['bpmn:outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:dataObject'] != undefined){
                let i = 0;
                e['bpmn:dataObject'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'DataObject'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:dataObjectReference'] != undefined){
                let i = 0;
                e['bpmn:dataObjectReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:dataObjectReference'][0]['$']['name']
                    let eventName = 'DataObjectReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:dataStoreReference'] != undefined){
                let i = 0;
                e['bpmn:dataStoreReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['bpmn:dataStoreReference'][0]['$']['name']
                    let eventName = 'DataStoreReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }


        })
        return parse
    }
    /**
     * Parse Camunda XML file to Comparison Map
     * @param bpmn_from_user_lvl2 
     */
    createComparisonMapForCAMUNDAV2(bpmn_from_user_lvl2){
        console.log("START PARSING Camunda")
        let parse: Map<string,Map<string,any>> = new Map()
        bpmn_from_user_lvl2.forEach(e=>{
            console.log("BPMN")
            console.log(e)
            if(e['startEvent'] != undefined){
                let i = 0
                e['startEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    console.log(e['startEvent'])
                    let name = e['startEvent'][0]['$']['name']
                    let eventName = 'Startevent'+i
                    let outgoing = e['startEvent'][0]['outgoing'].length
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['endEvent'] != undefined){
                let i = 0
                e['endEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['endEvent'][0]['$']['name']
                    let eventName = 'Endevent'+i
                    let incoming = e['endEvent'][0]['incoming'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['exclusiveGateway'] != undefined){
                let i = 0
                e['exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['exclusiveGateway'][0]['$']['name']
                    let eventName = 'ExclusiveGateway'+i
                    let incoming = e['exclusiveGateway'][0]['incoming'].length
                    let outgoing = e['exclusiveGateway'][0]['outgoing'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:participant'] != undefined){
                let i = 0
                e['participant'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['participant'][0]['$']['name']
                    let eventName = 'Participant'+i
                    console.log(name)
                    console.log(eventName)
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['lane'] != undefined){
                let i = 0
                e['lane'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['lane'][0]['$']['name']
                    let eventName = 'Lane'+i
                    console.log(name)
                    console.log(eventName)
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['flowNodeRef'] != undefined){
                let i = 0
                e['flowNodeRef'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'FlowNodeRef'+i
                    console.log(eventName)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['sequenceFlow'] != undefined){
                let i = 0
                e['sequenceFlow'].forEach(ele=>{
                    console.log()
                    let res: Map<string,any> = new Map()
                    let name = e['sequenceFlow'][0]['$']['name']
                    let eventName = 'SequenceFlow'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['subProcess'] != undefined){
                let i = 0
                e['subProcess'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['subProcess'][0]['$']['name']
                    let eventName = 'subProcess'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['parallelGateway'] != undefined){
                let i = 0
                e['parallelGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ParallelGateway'+i
                    let incoming = e['parallelGateway'][0]['incoming'].length
                    let outgoing = e['parallelGateway'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['exclusiveGateway'] != undefined){
                let i = 0
                e['exclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ExclusiveGateway'+i
                    let name = e['exclusiveGateway'][0]['$']['name']
                    let incoming = e['exclusiveGateway'][0]['incoming'].length
                    let outgoing = e['exclusiveGateway'][0]['outgoing'].length
                    console.log(name)
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['complexGateway'] != undefined){
                let i = 0
                e['complexGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ComplexGateway'+i
                    let incoming = e['complexGateway'][0]['incoming'].length
                    let outgoing = e['complexGateway'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['inclusiveGateway'] != undefined){
                let i = 0
                e['inclusiveGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'InclusiveGateway'+i
                    let incoming = e['inclusiveGateway'][0]['incoming'].length
                    let outgoing = e['inclusiveGateway'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:eventBasedGateway'] != undefined){
                let i = 0
                e['eventBasedGateway'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'EventBasedGateway'+i
                    let incoming = e['eventBasedGateway'][0]['incoming'].length
                    let outgoing = e['eventBasedGateway'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['bpmn:intermediateCatchEvent'] != undefined){
                let i = 0
                e['intermediateCatchEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateCatchEvent'+i
                    let name = e['intermediateCatchEvent'][0]['$']['name']
                    let incoming = e['intermediateCatchEvent'][0]['incoming'].length
                    let outgoing = e['intermediateCatchEvent'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['intermediateThrowEvent'] != undefined){
                let i = 0
                e['intermediateThrowEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'IntermediateThrowEvent'+i
                    let name = e['intermediateThrowEvent'][0]['$']['name']
                    let incoming = e['intermediateThrowEvent'][0]['incoming'].length
                    let outgoing = e['intermediateThrowEvent'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['boundaryEvent'] != undefined){
                let i = 0
                e['boundaryEvent'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BoundaryEvent'+i
                    let name = e['boundaryEvent'][0]['$']['name']
                    let incoming = e['boundaryEvent'][0]['bincoming'].length
                    let outgoing = e['boundaryEvent'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['task'] != undefined){
                let i = 0;
                e['task'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'Task'+i
                    let name = e['task'][0]['$']['name']
                    let incoming = e['task'][0]['incoming'].length
                    let outgoing = e['task'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
                
            }
            if(e['manualTask'] != undefined){
                let i = 0;
                e['manualTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ManualTask'+i
                    let name = e['manualTask'][0]['$']['name']
                    let incoming = e['manualTask'][0]['incoming'].length
                    let outgoing = e['manualTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['sendTask'] != undefined){
                let i = 0;
                e['sendTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'SendTask'+i
                    let name = e['sendTask'][0]['$']['name']
                    let incoming = e['sendTask'][0]['incoming'].length
                    let outgoing = e['sendTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['receiveTask'] != undefined){
                let i = 0;
                e['receiveTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ReceiveTask'+i
                    let name = e['receiveTask'][0]['$']['name']
                    let incoming = e['receiveTask'][0]['incoming'].length
                    let outgoing = e['receiveTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['scriptTask'] != undefined){
                let i = 0;
                e['scriptTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ScriptTask'+i
                    let name = e['scriptTask'][0]['$']['name']
                    let incoming = e['scriptTask'][0]['incoming'].length
                    let outgoing = e['scriptTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['userTask'] != undefined){
                let i = 0;
                e['userTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'UserTask'+i
                    let name = e['userTask'][0]['$']['name']
                    let incoming = e['userTask'][0]['incoming'].length
                    let outgoing = e['userTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['businessRuleTask'] != undefined){
                let i = 0;
                e['businessRuleTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'BusinessRuleTask'+i
                    let name = e['businessRuleTask'][0]['$']['name']
                    let incoming = e['businessRuleTask'][0]['incoming'].length
                    let outgoing = e['businessRuleTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['serviceTask'] != undefined){
                let i = 0;
                e['serviceTask'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'ServiceTask'+i
                    let name = e['serviceTask'][0]['$']['name']
                    let incoming = e['serviceTask'][0]['incoming'].length
                    let outgoing = e['serviceTask'][0]['outgoing'].length
                    console.log(eventName)
                    console.log(outgoing)
                    console.log(incoming)
                    res.set("name",name)
                    res.set("outgoing",outgoing)
                    res.set("incoming",incoming)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['dataObject'] != undefined){
                let i = 0;
                e['dataObject'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let eventName = 'DataObject'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['dataObjectReference'] != undefined){
                let i = 0;
                e['dataObjectReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['dataObjectReference'][0]['$']['name']
                    let eventName = 'DataObjectReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }
            if(e['dataStoreReference'] != undefined){
                let i = 0;
                e['dataStoreReference'].forEach(ele=>{
                    let res: Map<string,any> = new Map()
                    let name = e['dataStoreReference'][0]['$']['name']
                    let eventName = 'DataStoreReference'+i
                    res.set("name",name)
                    parse.set(eventName,res)
                    i++
                })
            }


        })
        return parse
    }
}
class ReturnSVGAndSCORE{
    svg:string
    score:number
    constructor(svg_inp:string,score_inp: number){
        this.svg = svg_inp
        this.score = score_inp}
}
class BPMN_BPMNIO{
    bpmn2_process:string

    constructor(file: any){
        this.parse(file)
    }
    parse(file:any){

    }
}
class BPMN_CAMUNDA{
    constructor(file: any){
        this.parse(file)
    }
    parse(file:any){
        
    }
}
