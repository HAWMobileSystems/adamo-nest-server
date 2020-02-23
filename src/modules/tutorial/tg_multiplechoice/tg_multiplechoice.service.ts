import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { Tg_MultiplechoiceRepository } from "./tg_multiplechoice.repository";
import { Tg_MultiplechoiceEntity } from "./tg_multiplechoice.entity";
import { CategoryEntity } from '../category/category.entity';
import { Multiplechoice_QuestionEntity } from '../multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from '../multiplechoice_question_answer/multiplechoice_question_answer.entity';
import { TestEntity } from '../test/test.entity';
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import { Multiplechoice_Question_AnswerDto } from '../multiplechoice_question_answer/dto/Multiplechoice_Question_AnswerDto';

@Injectable()
export class Tg_MultiplechoiceService {
    /**
     * 
     * Returns 1 not yet (correct) Answered Question including 4 Answers
     * for the given category
     * @param user_id
     * @param cat_name
     */
    async getMultiplechoiceQs(user_id: any,cat_name: string) {
       //Retrieve all Categorys
       const category_IDs = await getRepository(CategoryEntity)
       .createQueryBuilder("category")
       .getMany();
       let catid
       category_IDs.forEach(e=>{
           if(e.category_name == cat_name){
               catid = e.category_id
           }
       })     
       console.log("Get all answered Questions")
       /**
        * Get All Questions answered by user in the given category
        */
       const all_QS_Answered = await getRepository(Tg_MultiplechoiceEntity)
       .createQueryBuilder("tg_multiplechoice")
       .select("tg_multiplechoice.tg_multiplechoice_id","id")
       .addSelect("mult_qs_table.multiplechoice_question_description","name")
       .addSelect("mult_qs_table.multiplechoice_question_text","question")
       .addSelect("mult_qs_ans_given.tg_multiplechoice_answered_answerd","answer given")
       .addSelect("mult_qs_ans.multiplechoice_question_answer_true","answer correct")
       .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
       .innerJoin(Multiplechoice_QuestionEntity,'mult_qs_table','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = mult_qs_table.multiplechoice_question_id::VARCHAR')
       .innerJoin(Tg_Multiplechoice_AnsweredEntity,'mult_qs_ans_given','mult_qs_ans_given.tg_multiplechoice_answered_from_qs_id = tg_multiplechoice.tg_multiplechoice_id::VARCHAR')
       .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
       .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
       .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:catid})
       .getRawMany();

       console.log(all_QS_Answered)
       return all_QS_Answered
       /**
        * Check wheater the answered Questions where correct.
        */
       
    
     
    //    const all_QS = await getRepository(Modelling_QuestionEntity)
    //    .createQueryBuilder("modelling_question")
    //    .select("cat_table.category_name","catName")
    //    .addSelect("modelling_question.mod_qs_id","id")
    //    .addSelect("modelling_question.mod_qs_question_description","name")
    //    .addSelect("0","score")
    //    .innerJoin(CategoryEntity,'cat_table', 'modelling_question.mod_qs_categories = cat_table.category_id::VARCHAR')
    //    .getRawMany();
    //    console.log("Parsing Results")
    //    const returnArray = new returnAsArray();
    //    all_QS.forEach(e=>{
    //        let ele = new parseReturn(e.catName,e.id,e.name)
    //        returnArray.append(ele)
    //    })
    //    console.log("Adding Score")
    //    all_QS_Answered.forEach(e=>{
    //        returnArray.array.forEach(array_ele=>{
    //            if(e.id == array_ele.id){
    //                array_ele.setScore(e.score)
    //            }
    //        })
    //    })

    }
    async getAllMult_Answ_By_User(cat_name:string,user_id:string){
        //Retrieve all Categorys
       const category_IDs = await getRepository(CategoryEntity)
       .createQueryBuilder("category")
       .getMany();
       let catid
       category_IDs.forEach(e=>{
           if(e.category_name == cat_name){
               catid = e.category_id
           }
       })     
       console.log("Get all answered Questions")
       /**
        * Get All Questions answered by user in the given category
        */
       const all_QS_Answered = await getRepository(Tg_MultiplechoiceEntity)
       .createQueryBuilder("tg_multiplechoice")
       .select("tg_multiplechoice.tg_multiplechoice_id","id")
       .addSelect("mult_qs_table.multiplechoice_question_description","name")
       .addSelect("mult_qs_table.multiplechoice_question_text","question")
       .addSelect("mult_qs_ans_given.tg_multiplechoice_answered_answerd","answer given")
       .addSelect("mult_qs_ans.multiplechoice_question_answer_true","answer correct")
       .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
       .innerJoin(Multiplechoice_QuestionEntity,'mult_qs_table','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = mult_qs_table.multiplechoice_question_id::VARCHAR')
       .innerJoin(Tg_Multiplechoice_AnsweredEntity,'mult_qs_ans_given','mult_qs_ans_given.tg_multiplechoice_answered_from_qs_id = tg_multiplechoice.tg_multiplechoice_id::VARCHAR')
       .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
       .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
       .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:catid})
       .getRawMany();

       console.log(all_QS_Answered)
       return all_QS_Answered
    }
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Tg_MultiplechoiceRepository
    ) {
    }

    async find(): Promise<Tg_MultiplechoiceEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Tg_MultiplechoiceEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Tg_MultiplechoiceEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'tg_multiplechoice', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_MultiplechoiceEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
