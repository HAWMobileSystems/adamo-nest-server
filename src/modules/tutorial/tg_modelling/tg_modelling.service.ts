import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult, getRepository } from 'typeorm';
import { Tg_ModellingRepository } from "./tg_modelling.repository";
import { Tg_ModellingEntity } from './tg_modelling.entity';
import { Modelling_QuestionEntity } from '../modelling_question/modelling_question.entity';
import { Modelling_Question_RulesEntity } from '../modelling_question_rules/modelling_question_rules.entity';
import { Modelling_RulesEntity } from '../modelling_rules/modelling_rules.entity';

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
     */
    solveQuestion(user_id: any, qs_id: any) {
        throw new Error("Method not implemented.");
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
