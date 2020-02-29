import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult, getRepository, getConnection } from 'typeorm';
import { Tg_MultiplechoiceRepository } from "./tg_multiplechoice.repository";
import { Tg_MultiplechoiceEntity } from "./tg_multiplechoice.entity";
import { CategoryEntity } from '../category/category.entity';
import { Multiplechoice_QuestionEntity } from '../multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from '../multiplechoice_question_answer/multiplechoice_question_answer.entity';
import { TestEntity } from '../test/test.entity';
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import { Multiplechoice_Question_AnswerDto } from '../multiplechoice_question_answer/dto/Multiplechoice_Question_AnswerDto';
import { ApiRequestTimeoutResponse } from '@nestjs/swagger';

@Injectable()
export class Tg_MultiplechoiceService {
    /**
     * 
     * Posts the Answers given by 
     * 
     * @param user_id in combination with the 
     * @param qs_id and the given 
     * @param answers to the Database
     * Then returns for each answer if the given answer was correct or not.
     */
    async solveMultiplechoice(user_id: any, qs_id: any, answers: Map<string,string>) {
        console.log(qs_id)
        //Get DTO to Multiplechoice_Qs
        
        const mult_qs_id = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .where("multiplechoice_question.multiplechoice_question_id = :multiplechoice_question_id",{multiplechoice_question_id:qs_id})
        .getOne();
        console.log(mult_qs_id)
        //Get List of Answers given
        let listOfAnswerIDs = []
        
        answers.forEach((value,key)=>{
            let waiter = this.putMC(key,qs_id,value)
            listOfAnswerIDs.push(key)
        })
        
        //Get DTOs for all answers given
        const all_Answers = await getRepository(Multiplechoice_Question_AnswerEntity)
        .createQueryBuilder("multiplechoice_question_answer")
        .select("multiplechoice_question_answer.multiplechoice_question_answer_id","id")
        .addSelect("multiplechoice_question_answer.multiplechoice_question_answer_true","correct")
        .where("multiplechoice_question_answer.multiplechoice_question_answer_id IN (:...multiplechoice_question_answer_id)",{multiplechoice_question_answer_id:listOfAnswerIDs})
        .getRawMany();
        
        //const all_Answers = await this.testReturnDTO(listOfAnswerIDs)
        console.log(all_Answers)
        //compare answers given to correct value
        let returnMap: Map<string,boolean> = new Map()
        answers.forEach((value,key)=>{
            all_Answers.forEach(e=>{
                //e => answer ID
                if(key == e.id){
                    let answergiven = (value == "true")
                    if(answergiven == e.correct){
                        returnMap.set(e.id,true)
                    }else{
                        returnMap.set(e.id,false)
                    }
                }
            })
        })
        let returnArray: {key :string,value :boolean}[] = []
        let solvedArray = []
        answers.forEach((value,key)=>{
            all_Answers.forEach(e=>{
                //e => answer ID
                if(key == e.id){
                    let answergiven = (value == "true")
                    if(answergiven == e.correct){
                        returnArray.push({key:e.id,value:true})
                        solvedArray.push(1)
                    }else{
                        returnArray.push({key:e.id,value:false})
                        solvedArray.push(0)
                    }
                }
            })
        })
        let value:boolean = false
        let v = solvedArray.find(e=> e == 0)
        if(v === undefined){
            value = true
        }
        //Put Question in Database
        const seedTest3 = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Tg_MultiplechoiceEntity)
        .values([{
            tg_multiplechoice_id:qs_id,
            tg_multiplechoice_multiplechoice_id:qs_id,
            tg_multiplechoice_solved_correct:value
        }]).execute();
        
        //Put given Answers in Database
        const seedTest = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(TestEntity)
        .values([{
            test_solved_test_id: seedTest3.identifiers[0].tg_multiplechoice_id,
            test_user_id: user_id,
            test_categorie: mult_qs_id.multiplechoice_question_categories,
        }]).execute();
        
        //Return ReturnMap for Highligting
        return returnArray
    }
    /**
     * 
     * @param key Method to put into tg_mult_choice
     * @param qs_id 
     * @param value 
     */
    async putMC(key,qs_id,value){
        let seedTest4 = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Tg_Multiplechoice_AnsweredEntity)
        .values([{
            tg_multiplechoice_answered_answer_id: key,
            tg_multiplechoice_answered_from_qs_id: qs_id,
            tg_multiplechoice_answered_answerd: (value == "true"),
            tg_multiplechoice_answered_id : qs_id
        }]).execute();
    }
    // async testReturnDTO(listOfAnswerIDs: string[]){
    //     const all_Answers = await getRepository(Multiplechoice_Question_AnswerEntity)
    //     .createQueryBuilder("multiplechoice_question_answer")
    //     .where("multiplechoice_question_answer.multiplechoice_question_answer_id IN (:...multiplechoice_question_answer_id)",{multiplechoice_question_answer_id:listOfAnswerIDs})
    //     .getMany();
    //     return all_Answers
    // }
    /**
     * 
     * Returns 1 not yet (correct) Answered Question by the 
     * @param user_id corresponding to the 
     * @param cat_name
     *  
     * from the Database 
     */
    async getMultiplechoiceQs(user_id: any,cat_name: string,lang: string) {
       
        let request = ""
        let request_returnQS = ""
        if(lang == 'de'){
            request = "multiplechoice_question.multiplechoice_question_text_de"
            request_returnQS = "mult_qs_ans.multiplechoice_question_answer_text_de"
        }
        if(lang == 'en'){
            request = "multiplechoice_question.multiplechoice_question_text"
            request_returnQS = "mult_qs_ans.multiplechoice_question_answer_text"
        }

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
       /**
        * Get All Questions answered correct by user in the given category
        */

       const all_QS_Answered_Correct = await getRepository(Tg_MultiplechoiceEntity)
       .createQueryBuilder("tg_multiplechoice")
       .select("test_table.test_solved_test_id","id")
       .addSelect("tg_multiplechoice.tg_multiplechoice_solved_correct","correct")
       .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
       //.innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
       .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
       .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:catid})
       .getRawMany();
    //    console.log("All QS Answered Correct")
    //    console.log(all_QS_Answered_Correct.length)
       //Create List of Correct Answered
       let listOfSolvedCorrect = []
       let listOfAllQuestion = []
       all_QS_Answered_Correct.forEach(solvedC=>{
           let val = (solvedC.correct == "true")
            if(val == true){
            listOfSolvedCorrect.push(solvedC.id)
            }
            listOfAllQuestion.push(solvedC.id)
       })
    //    console.log("Solved COrr")
    //    console.log(listOfSolvedCorrect)
       // Get List of All Questions
       /**let all_QS = await getRepository(Multiplechoice_QuestionEntity)
       .createQueryBuilder("multiplechoice_question")
       .select("multiplechoice_question.multiplechoice_question_id","id")
       .where('multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories',{multiplechoice_question_categories:catid})
       .getRawMany();**/
    //    console.log("ALL QS")
    //    console.log(all_QS.length)
       //Create List of All Question
      

    //    all_QS.forEach(all=>{
    //     listOfAllQuestion.push(all.id)
    //    })
       //Create List of All Qs except the solved ones
       let listOfQuestionsToAsk = []
       listOfSolvedCorrect.forEach(idToRem=>{
        listOfAllQuestion = this.remove_array_element(listOfAllQuestion,idToRem)
        })
/*
       const all_QS_Answered = await getRepository(Tg_MultiplechoiceEntity)
       .createQueryBuilder("tg_multiplechoice")
       .select("test_table.test_solved_test_id","id")
       //.addSelect("mult_qs_table.multiplechoice_question_description","name")
       .addSelect(request,"question")
       .addSelect("mult_qs_ans_given.tg_multiplechoice_answered_answerd","answergiven")
       .addSelect("mult_qs_ans.multiplechoice_question_answer_true","answercorrect")
       .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
       .innerJoin(Multiplechoice_QuestionEntity,'multiplechoice_question','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = multiplechoice_question.multiplechoice_question_id::VARCHAR')
       .innerJoin(Tg_Multiplechoice_AnsweredEntity,'mult_qs_ans_given','mult_qs_ans_given.tg_multiplechoice_answered_from_qs_id = tg_multiplechoice.tg_multiplechoice_id::VARCHAR')
       .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
       .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
       .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:catid})
       .andWhere('')
       .getRawMany();
       console.log("All QS Answered")
       console.log(all_QS_Answered)
*/
       /**
        * Check wheater Questions was answered correct
        * 
        */
        //Get List of all IDs

        // console.log(all_QS_Answered)
        // const listOfAllIds = []
        // all_QS_Answered.forEach(e=>{
        //    listOfAllIds.push(e.id)
        // })
        // //Get unique List of solved Tests
        // let a_filterd = this.uniqueArray(listOfAllIds)
        // console.log(a_filterd)
        // //Create a list of all QS beeing answerd wrong.
        // let idToRemove = []
        // all_QS_Answered.forEach(e=>{
        //     if(e.answergiven != e.answercorrect){
        //         idToRemove.push(e.id)
        //     }
        // })

        // console.log("List of All Solved Test")
        // console.log(a_filterd)
        // console.log("List of all Wrong Answers")
        // console.log(idToRemove)

        // //Now we can remove the list of correct answered Questions 
        // //of a List of all Multiplechoice Questions.
        // let all_QS = await getRepository(Multiplechoice_QuestionEntity)
        // .createQueryBuilder("multiplechoice_question")
        // .select("multiplechoice_question.multiplechoice_question_id","id")
        // .where('multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories',{multiplechoice_question_categories:catid})
        // .getRawMany();

        // //Remove the IDS to get an List of all Applicable QUestions
        // let arrayOfAllQsIds = []
        // let final_array = []
        // all_QS.forEach(e=>{
        //     arrayOfAllQsIds.push(e.id)
        //     final_array.push(e.id)
        // })
        // //Remove all wrong answers from Array to get only right 
        // idToRemove.forEach(idToRem=>{
        //     arrayOfAllQsIds = this.remove_array_element(arrayOfAllQsIds,idToRem)
        // })
        // final_array = arrayOfAllQsIds
        // // arrayOfAllQsIds.forEach(idTRem=>{
        // //     final_array = this.remove_array_element(final_array,idTRem)
        // // })
        // //Remove right answers from Text

        //Now we can remove the list of correct answered Questions 
        //of a List of all Multiplechoice Questions.
        
//----
        // let all_QS_only_ids = []
        // all_QS.forEach(eele=>{
        //     all_QS_only_ids.push(eele.id)
        // })
        // console.log("All QS ONly ID")
        // console.log(all_QS_only_ids.length)


        // const listOfAllIds = []
        // all_QS_Answered.forEach(e=>{
        //    listOfAllIds.push(e.id)
        // })
        // //console.log(listOfAllIds)
        //  //Get unique List of solved Tests
        // let a_filterd = this.uniqueArray(listOfAllIds)
        // console.log("ALL SOLVED TEST")
        // console.log(a_filterd)
        // console.log("Above Unique")
        // //Create a list of all QS beeing answerd wrong.
        // let idToRemove = []
        // //Answered right
        // let answeredCorr = []
        // all_QS_Answered.forEach(e=>{
        //     if(e.answergiven != e.answercorrect){
        //         idToRemove.push(e.id)
        //     }else{
        //         answeredCorr.push(e.id)
        //     }
        // })
        
        // //idToRemove sind falsch gegebene antworten --> müssen entfernt werden
        // let wrong = this.uniqueArray(idToRemove)
        // //AnsweredCorr sind nicht falsch gegebene Antworten 
        // let possible_right = this.uniqueArray(answeredCorr)

        // let def_right = []
        // possible_right.forEach(ele=>{
        //     const found = wrong.find(wele=> wele == ele)
        //     console.log(found)
        //     if(found === undefined){
        //         //Wenn found undefined ist, ist ele nicht in wrong --> 
        //         //Es ist also richtig
        //         def_right.push(ele)
        //     }
        // })
     
        // //Wir entfernen alle richtige um nur unbeantwortete zu erhalten.
        // def_right.forEach(idToRem=>{
        //     all_QS_only_ids = this.remove_array_element(all_QS_only_ids,idToRem)
        // })
        // console.log("All solved Not correct")
        // console.log(idToRemove)
        // console.log("Possibly solved correct")
        // console.log(answeredCorr)
        // //Make them to unique arrays
        // let wrong = this.uniqueArray(idToRemove)
        // let possible_right = this.uniqueArray(answeredCorr)

        // //Remove all wrong answers from Array to get only right 
        // a_filterd.forEach(idToRem=>{
        //     all_QS_only_ids = this.remove_array_element(all_QS_only_ids,idToRem)
        // })
        // //NOw possible_right is right.
        // console.log(possible_right)

        // possible_right.forEach(ele=>{
        //     all_QS_only_ids = this.remove_array_element(all_QS_only_ids,ele)
        // })
//--
        const randomElement = listOfAllQuestion[Math.floor(Math.random() * listOfAllQuestion.length)];
        
        // console.log("Random Ele:")        
        // console.log(randomElement)
        // console.log("Array gekürzt:")
        // console.log(all_QS_only_ids.length)
        // console.log("Array ungekürzt:")
        // console.log(all_QS.length)

        let return_Qs = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .select("multiplechoice_question.multiplechoice_question_id","id")
        .addSelect(request,"question")
        .addSelect(request_returnQS,"answer")
        .addSelect("mult_qs_ans.multiplechoice_question_answer_id","answerID")
        .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans.multiplechoice_question_answer_question_id = multiplechoice_question.multiplechoice_question_id::VARCHAR')
        .where('multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories',{multiplechoice_question_categories:catid})
        //.andWhere("multiplechoice_question.multiplechoice_question_id IN (:...multiplechoice_question_id)",{multiplechoice_question_id:final_array})
        .andWhere('multiplechoice_question.multiplechoice_question_id = :multiplechoice_question_id',{multiplechoice_question_id:randomElement})
        .getRawMany(); //IN (:...mod_qs_categories)",{mod_qs_categories:cat_ids_array}
       
        //return_Qs ==> All QS not yet correct answered by user
        // console.log(return_Qs)
        return return_Qs
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
