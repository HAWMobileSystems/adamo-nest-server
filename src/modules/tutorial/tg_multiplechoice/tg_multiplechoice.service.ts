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
       .select("test_table.test_solved_test_id","id")
       .addSelect("mult_qs_table.multiplechoice_question_description","name")
       .addSelect("mult_qs_table.multiplechoice_question_text","question")
       .addSelect("mult_qs_ans_given.tg_multiplechoice_answered_answerd","answergiven")
       .addSelect("mult_qs_ans.multiplechoice_question_answer_true","answercorrect")
       .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
       .innerJoin(Multiplechoice_QuestionEntity,'mult_qs_table','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = mult_qs_table.multiplechoice_question_id::VARCHAR')
       .innerJoin(Tg_Multiplechoice_AnsweredEntity,'mult_qs_ans_given','mult_qs_ans_given.tg_multiplechoice_answered_from_qs_id = tg_multiplechoice.tg_multiplechoice_id::VARCHAR')
       .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
       .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
       .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:catid})
       .getRawMany();
       /**
        * Check wheater Questions was answered correct
        * 
        */
        //Get List of all IDs
        console.log(all_QS_Answered)
        const listOfAllIds = []
        all_QS_Answered.forEach(e=>{
           listOfAllIds.push(e.id)
        })
        //Get unique List of solved Tests
        let a_filterd = this.uniqueArray(listOfAllIds)
        console.log(a_filterd)
        //Create a list of all QS beeing answerd wrong.
        let idToRemove = []
        all_QS_Answered.forEach(e=>{
            if(e.answergiven != e.answercorrect){
                idToRemove.push(e.id)
            }
        })

        console.log("List of Array Bevore Remove")
        console.log(a_filterd)
        //Remove InCorrect Questions from all Answered Questions
        // idToRemove.forEach(idToRem=>{
        //     a_filterd = this.remove_array_element(a_filterd,idToRem)
        // })
        console.log("Array After Remove")
        console.log(a_filterd)

        //Now we can remove the list of correct answered Questions 
        //of a List of all Multiplechoice Questions.
        let all_QS = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .select("multiplechoice_question.multiplechoice_question_id","id")
        .where('multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories',{multiplechoice_question_categories:catid})
        .getRawMany();
        //Remove the IDS to get an List of all Applicable QUestions
        let arrayOfAllQsIds = []
        all_QS.forEach(e=>{
            arrayOfAllQsIds.push(e.id)
        })
        a_filterd.forEach(idToRem=>{
            arrayOfAllQsIds = this.remove_array_element(arrayOfAllQsIds,idToRem)
        })
        let return_Qs = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .select("multiplechoice_question.multiplechoice_question_id","id")
        .addSelect("multiplechoice_question.multiplechoice_question_text","question")
        .addSelect("mult_qs_ans.multiplechoice_question_answer_text","answer")
        .addSelect("mult_qs_ans.multiplechoice_question_answer_id","answerID")
        .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans.multiplechoice_question_answer_question_id = multiplechoice_question.multiplechoice_question_id::VARCHAR')
        .where('multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories',{multiplechoice_question_categories:catid})
        .getRawMany();
        console.log(arrayOfAllQsIds)
        //Get ALL QS
        



        let allNotCorrectAnsweredQuestions = []



        //Get Index to Remov
        /**
        * Check wheater the answered Questions where correct.
        */
        return return_Qs
    }

    // async getAllMult_Answ_By_User(cat_name:string,user_id:string){
    //     //Retrieve all Categorys
    //    const category_IDs = await getRepository(CategoryEntity)
    //    .createQueryBuilder("category")
    //    .getMany();
       
    //    let catid
    //    category_IDs.forEach(e=>{
    //        if(e.category_name == cat_name){
    //            catid = e.category_id
    //        }
    //    })     
    //    console.log("Get all answered Questions")
    //    /**
    //     * Get All Questions answered by user in the given category
    //     */
    //    const all_QS_Answered = await getRepository(Tg_MultiplechoiceEntity)
    //    .createQueryBuilder("tg_multiplechoice")
    //    .select("tg_multiplechoice.tg_multiplechoice_id","id")
    //    .addSelect("mult_qs_table.multiplechoice_question_description","name")
    //    .addSelect("mult_qs_table.multiplechoice_question_text","question")
    //    .addSelect("mult_qs_ans_given.tg_multiplechoice_answered_answerd","answer given")
    //    .addSelect("mult_qs_ans.multiplechoice_question_answer_true","answer correct")
    //    .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
    //    .innerJoin(Multiplechoice_QuestionEntity,'mult_qs_table','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = mult_qs_table.multiplechoice_question_id::VARCHAR')
    //    .innerJoin(Tg_Multiplechoice_AnsweredEntity,'mult_qs_ans_given','mult_qs_ans_given.tg_multiplechoice_answered_from_qs_id = tg_multiplechoice.tg_multiplechoice_id::VARCHAR')
    //    .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
    //    .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
    //    .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:catid})
    //    .getRawMany();

    //    console.log(all_QS_Answered)
    //    return all_QS_Answered
    // }
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
    //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    uniqueArray(array) {
        var result = Array.from(new Set(array));
        return result    
    }
    //https://www.w3resource.com/javascript-exercises/javascript-array-exercise-31.php
    remove_array_element(array, n){
        var index = array.indexOf(n);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
    }
}
