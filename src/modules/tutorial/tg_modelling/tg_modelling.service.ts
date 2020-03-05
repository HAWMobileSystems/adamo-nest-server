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

import { CamundaBpmnParserV2 } from './XMLParser/CamundaBpmnParserV2';
import { CamundaBpmnParserV1 } from './XMLParser/CamundaBpmnParserV1';
import { BPMNIOParser } from './XMLParser/BPMNIOParser';
import { BPMNXMLParser } from './XMLParser/BPMNXMLParser';

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
        .addSelect("mod_qs_rules.modelling_question_rule_name","qs_rule_name")
        .addSelect("mod_rules.modelling_rule_text","mod_r_text")
        .addSelect("mod_rules.modelling_rule_text_de","mod_r_text_de")
        .innerJoin(Modelling_Question_RulesEntity,"mod_qs_rules","modelling_question.mod_qs_custom_ruleset = mod_qs_rules.modelling_question_id::VARCHAR")
        .innerJoin(Modelling_RulesEntity,"mod_rules","mod_qs_rules.modelling_question_id::VARCHAR = mod_rules.modelling_rule_id")
        .getRawMany();
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
        //Validate Diagramm
        let score = 0
        let parser = new BPMNXMLParser()

        score = await parser.validate(all_Answers.xml,user_xml)
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
        return ret
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

