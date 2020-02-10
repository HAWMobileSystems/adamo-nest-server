import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import e = require('express');
import { TestEntity } from '../test/test.entity';
import { Tg_ModellingEntity } from '../tg_modelling/tg_modelling.entity';
import { Modelling_QuestionEntity } from '../modelling_question/modelling_question.entity';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice/tg_multiplechoice.entity';
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import { Multiplechoice_Question_AnswerEntity } from '../multiplechoice_question_answer/multiplechoice_question_answer.entity';

@Injectable()
export class CategoryService {
    
    
    async getStartView(userID: any): Promise<any> {
        //get Categories
        const getCategory_ids = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .getMany();
        //create new Array
        const returnArray = new Array;
        //retrieve all tests done by the user
        const getallByUser = await getRepository(TestEntity)
        .createQueryBuilder('test')
        .where("test.test_user_id = :test_user_id",{test_user_id:userID})
        .getMany();
        const getAllByUsersByMult = await getRepository(Tg_MultiplechoiceEntity)
        .createQueryBuilder('tg_multiplechoice')
        .getMany();
        //Array -> all MultQs Answered by the user
        const allMultAnsweredByUser = new Array;
        //get all Matches between user and answered multiplechoice questions
        getallByUser.forEach(function (users){
           getAllByUsersByMult.forEach(function (mult){
               if(users.test_solved_test_id === mult.tg_multiplechoice_multiplechoice_id){
                   allMultAnsweredByUser.push(mult)
               }
           })
        })
        console.log(allMultAnsweredByUser);
        //get all answererd Questions
        const getAllAnsweredQs = await getRepository(Tg_Multiplechoice_AnsweredEntity)
        .createQueryBuilder('tg_multiplechoice_answered')
        .getMany();
        //Array -> all MultQsAnswers by the user
        const allAnswersByUser = new Array;
        //get all Matches between multQs answerd by user and answers
        allMultAnsweredByUser.forEach(function (allQs){
            getAllAnsweredQs.forEach(function (answered){
                if(allQs.tg_multiplechoice_multiplechoice_id === answered.tg_multiplechoice_answered_answer_id){
                    allAnswersByUser.push(answered)
                }
            })
        })
        console.log("HUHUHUHU");
        console.log(allAnswersByUser);
        const listOfAnsweredQs = new Array();
        //create List of AnsweredQs
        allMultAnsweredByUser.forEach(function (questions){
            listOfAnsweredQs.push(questions.tg_multiplechoice_multiplechoice_id)
        })
        console.log(listOfAnsweredQs)
        //
        const getAllAnswers = await getRepository(Multiplechoice_Question_AnswerEntity)
        .createQueryBuilder('multiplechoice_question_answer')
        .where("multiplechoice_question_answer.multiplechoice_question_answer_question_id IN (:list)",{list:listOfAnsweredQs})
        .getMany();
        //create List of possibleAnswers
        
        console.log(getAllAnswers)
        
        // getAllAnswers.forEach(function (answers){
        //     listOfAnsweredQs.forEach(function (answered){
        //         if(answers.multiplechoice_question_answer_question_id === answered.tg_multiplechoice_answered_answer_id){

        //         }
        //     })
        // })













        /**


        //itterate through categories
        getCategory_ids.forEach(function (value) {
            let newEntry = new Tutorial(value.category_name)
            //retreive all matching(by lvl) questions
            const mult_result = this.repository.createQueryBuilder('multiplechoice_question')
            .where("multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories",{multiplechoice_question_categories:value.category_id})
            .getMany();
            let allQSAnswered = [];
            //retreive all previously answered modelling question IDs

            var i;
            for (i = 0;i<allQsId.length;i++){
                const result_qs = getRepository(TestEntity)
                .createQueryBuilder("test")
                .where("test.test_solved_test_id = :test_solved_test_id",{test_solved_test_id:allQsId[i]})
                .andWhere("test.test_user_id = :test_user_id",{test_user_id:userID})
                .getOne();
                if(result_qs != undefined){
                    const zw_result = getRepository(Modelling_QuestionEntity)
                    .createQueryBuilder("modelling_question")
                    .where("modelling_question.mod_qs_id = :mod_qs_id",{mod_qs_id:result_qs.tg_modelling_question_id})
                    .getOne();
                    allQS.push(zw_result);
                }       
            }
            
            
            
             //retreive all matching questions
        const mod_result = await this.repository.createQueryBuilder('modelling_question')
        .where("modelling_question.mod_qs_categories = :mod_qs_categories",{mod_qs_categories:getCategory_id.category_id})
        .getMany();
            
            returnArray.push(newEntry)
        })


        //
    
    
    


     

         let allQsId = [];
         //Create a list of the contained IDs
         getallByUser.forEach(function (value) {
             allQsId.push(value.test_solved_test_id);
          });
         let allQS = [];
         //retreive all previously answered modelling question IDs
         var i;
         for (i = 0;i<allQsId.length;i++){
             const result_qs = await getRepository(Tg_ModellingEntity)
             .createQueryBuilder("tg_modelling")
             .where("tg_modelling.tg_modelling_id = :tg_modelling_id",{tg_modelling_id:allQsId[i]})
             .getOne();
             if(result_qs != undefined){
                 const zw_result = await getRepository(Modelling_QuestionEntity)
                 .createQueryBuilder("modelling_question")
                 .where("modelling_question.mod_qs_id = :mod_qs_id",{mod_qs_id:result_qs.tg_modelling_question_id})
                 .getOne();
                 allQS.push(zw_result);
             }       
         }
 
         result.forEach(function (value){
             if(value.id === allQS[0].id){
                 var index = result.indexOf(value);
                 if (index > -1) {
                     result.splice(index, 1);
                 }
             }
         });
        */
    
    
    }

    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: CategoryRepository
    ) {
    }

    async find(): Promise<CategoryEntity[]> {
        return await this.repository.find();
    }

    async create(intro: CategoryEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: CategoryEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.category_id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'category', queryRunner?: QueryRunner): SelectQueryBuilder<CategoryEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
class Modelling{
    mod_id
    mod_name
    mod_score
}
class Tutorial{
    catName: string
    catIntroFinished: string
    catMultScore : number
    catTotalQs : number
    catMod : Modelling[]

    constructor(cat: string){
        this.catName = cat
        this.catMod = new Array()
    }
}