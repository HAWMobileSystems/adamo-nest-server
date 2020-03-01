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
        
        score = this.validate(all_Answers.xml,user_xml)
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
    validate(camunda_xml: String, bpmn_io_xml: string) {
        // let camunda_xml = `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="Camunda Modeler" exporterVersion="2.2.4"><process id="Process_1" isExecutable="false"><startEvent id="StartEvent_1y45yut" name="Customer request received"><outgoing>SequenceFlow_0h21x7r</outgoing></startEvent><task id="Task_1hcentk" name="Prepare order"><incoming>SequenceFlow_0h21x7r</incoming><outgoing>SequenceFlow_0wnb4ke</outgoing></task><sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" /><sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="Task_0y9n49p" /><task id="Task_0y9n49p" name="Send order"><incoming>SequenceFlow_0wnb4ke</incoming><outgoing>SequenceFlow_0bgdiq2</outgoing></task><sequenceFlow id="SequenceFlow_0bgdiq2" sourceRef="Task_0y9n49p" targetRef="EndEvent_0j1jntq" /><endEvent id="EndEvent_0j1jntq" name="Customer request completed"><incoming>SequenceFlow_0bgdiq2</incoming></endEvent></process><bpmndi:BPMNDiagram id="BpmnDiagram_1"><bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut"><omgdc:Bounds x="152" y="102" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="128" y="145" width="89" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk"><omgdc:Bounds x="320" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r"><omgdi:waypoint x="188" y="120" /><omgdi:waypoint x="320" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke"><omgdi:waypoint x="420" y="120" /><omgdi:waypoint x="530" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="Task_0y9n49p_di" bpmnElement="Task_0y9n49p"><omgdc:Bounds x="530" y="80" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNEdge id="SequenceFlow_0bgdiq2_di" bpmnElement="SequenceFlow_0bgdiq2"><omgdi:waypoint x="630" y="120" /><omgdi:waypoint x="772" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNShape id="EndEvent_0j1jntq_di" bpmnElement="EndEvent_0j1jntq"><omgdc:Bounds x="772" y="102" width="36" height="36" /><bpmndi:BPMNLabel><omgdc:Bounds x="746" y="145" width="89" height="27" /></bpmndi:BPMNLabel></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></definitions>`
        // let bpmn_io_xml = `<?xml version="1.0" encoding="UTF-8"?>
        // <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
        //   <bpmn2:process id="Process_1" isExecutable="false">
        //    <bpmn2:startEvent id="StartEvent_1" />
        //     <bpmn2:startEvent id="StartEvent_168fjc8">
        //       <bpmn2:outgoing>SequenceFlow_103an5m</bpmn2:outgoing>
        //     </bpmn2:startEvent>
        //     <bpmn2:exclusiveGateway id="ExclusiveGateway_0m60uyq">
        //       <bpmn2:incoming>SequenceFlow_103an5m</bpmn2:incoming>
        //       <bpmn2:outgoing>SequenceFlow_1hdttia</bpmn2:outgoing>
        //       <bpmn2:outgoing>SequenceFlow_03fbyeh</bpmn2:outgoing>
        //     </bpmn2:exclusiveGateway>
        //     <bpmn2:sequenceFlow id="SequenceFlow_103an5m" sourceRef="StartEvent_168fjc8" targetRef="ExclusiveGateway_0m60uyq" />
        //     <bpmn2:task id="Task_165vwhk" name="Do Something">
        //       <bpmn2:incoming>SequenceFlow_1hdttia</bpmn2:incoming>
        //       <bpmn2:outgoing>SequenceFlow_1trvev3</bpmn2:outgoing>
        //     </bpmn2:task>
        //     <bpmn2:sequenceFlow id="SequenceFlow_1hdttia" sourceRef="ExclusiveGateway_0m60uyq" targetRef="Task_165vwhk" />
        //     <bpmn2:endEvent id="EndEvent_1wcyk1h">
        //       <bpmn2:incoming>SequenceFlow_03fbyeh</bpmn2:incoming>
        //     </bpmn2:endEvent>
        //     <bpmn2:sequenceFlow id="SequenceFlow_03fbyeh" sourceRef="ExclusiveGateway_0m60uyq" targetRef="EndEvent_1wcyk1h" />
        //     <bpmn2:endEvent id="EndEvent_1fty9vh">
        //       <bpmn2:incoming>SequenceFlow_1trvev3</bpmn2:incoming>
        //     </bpmn2:endEvent>
        //     <bpmn2:sequenceFlow id="SequenceFlow_1trvev3" sourceRef="Task_165vwhk" targetRef="EndEvent_1fty9vh" />
        //   </bpmn2:process>
        //   <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        //     <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
        //       <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        //         <dc:Bounds x="412" y="240" width="36" height="36" />
        //       </bpmndi:BPMNShape>
        //       <bpmndi:BPMNShape id="StartEvent_168fjc8_di" bpmnElement="StartEvent_168fjc8">
        //         <dc:Bounds x="146" y="73" width="36" height="36" />
        //       </bpmndi:BPMNShape>
        //       <bpmndi:BPMNShape id="ExclusiveGateway_0m60uyq_di" bpmnElement="ExclusiveGateway_0m60uyq" isMarkerVisible="true">
        //         <dc:Bounds x="261" y="34" width="50" height="50" />
        //       </bpmndi:BPMNShape>
        //       <bpmndi:BPMNEdge id="SequenceFlow_103an5m_di" bpmnElement="SequenceFlow_103an5m">
        //         <di:waypoint x="182" y="91" />
        //         <di:waypoint x="222" y="91" />
        //         <di:waypoint x="222" y="59" />
        //         <di:waypoint x="261" y="59" />
        //       </bpmndi:BPMNEdge>
        //       <bpmndi:BPMNShape id="Task_165vwhk_di" bpmnElement="Task_165vwhk">
        //         <dc:Bounds x="390" y="19" width="100" height="80" />
        //       </bpmndi:BPMNShape>
        //       <bpmndi:BPMNEdge id="SequenceFlow_1hdttia_di" bpmnElement="SequenceFlow_1hdttia">
        //         <di:waypoint x="311" y="59" />
        //         <di:waypoint x="390" y="59" />
        //       </bpmndi:BPMNEdge>
        //       <bpmndi:BPMNShape id="EndEvent_1wcyk1h_di" bpmnElement="EndEvent_1wcyk1h">
        //         <dc:Bounds x="276" y="115" width="36" height="36" />
        //       </bpmndi:BPMNShape>
        //       <bpmndi:BPMNEdge id="SequenceFlow_03fbyeh_di" bpmnElement="SequenceFlow_03fbyeh">
        //         <di:waypoint x="286" y="84" />
        //         <di:waypoint x="286" y="100" />
        //         <di:waypoint x="294" y="100" />
        //         <di:waypoint x="294" y="115" />
        //       </bpmndi:BPMNEdge>
        //       <bpmndi:BPMNShape id="EndEvent_1fty9vh_di" bpmnElement="EndEvent_1fty9vh">
        //         <dc:Bounds x="412" y="115" width="36" height="36" />
        //       </bpmndi:BPMNShape>
        //       <bpmndi:BPMNEdge id="SequenceFlow_1trvev3_di" bpmnElement="SequenceFlow_1trvev3">
        //         <di:waypoint x="440" y="19" />
        //         <di:waypoint x="440" y="-1" />
        //         <di:waypoint x="430" y="-1" />
        //         <di:waypoint x="430" y="115" />
        //       </bpmndi:BPMNEdge>
        //     </bpmndi:BPMNPlane>
        //   </bpmndi:BPMNDiagram>
        // </bpmn2:definitions>`
        let parse: Map<number,string> = new Map()
     
        
        let returnscore: number = 70
        return returnscore
    }
    normalize(xmlDoc: Document) {
        let x = xmlDoc.documentElement.childNodes;
        for (let i = 0; i < x.length ;i++) {
            let txt = x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>"
            console.log(txt)
        }
        // var start = bpmn_io_xml
         let left = xmlDoc
        //let right = left.replace('</bpmn2:','</')
        console.log(left)
        return left
    }
    

    async find(): Promise<Tg_ModellingEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Tg_ModellingEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Tg_ModellingEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'tg_modelling', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_ModellingEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
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
