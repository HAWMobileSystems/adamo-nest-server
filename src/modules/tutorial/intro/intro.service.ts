import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { IntroEntity } from './intro.entity';
import { IntroRepository } from './intro.repository';
import { CategoryEntity } from '../category/category.entity';
import { Modelling_QuestionEntity } from '../modelling_question/modelling_question.entity';
import { Tg_ModellingEntity } from '../tg_modelling/tg_modelling.entity';
import { TestEntity } from '../test/test.entity';
import { Tg_IntroEntity } from '../tg_intro/tg_intro.entity';
import { Multiplechoice_QuestionEntity } from '../multiplechoice_question/multiplechoice_question.entity';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice/tg_multiplechoice.entity';
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import { Multiplechoice_Question_AnswerEntity } from '../multiplechoice_question_answer/multiplechoice_question_answer.entity';

@Injectable()
export class IntroService {
    constructor(
        // @InjectRepository(Role)
        private readonly repository: IntroRepository
    ) {
    }
    /**
     * Returns the "Overview for the User"
     * @param user_id with the choosen Language
     * @param lang
     */
    async getAllQsByCatAndUser(user_id: string,lang: string) {

        let request = ""
        let request_allQS = ""
        if(lang == 'en'){
            request = "mod_qs_table.mod_qs_question_description"
            request_allQS = "modelling_question.mod_qs_question_description"
        }
        if(lang == 'de'){
            request = "mod_qs_table.mod_qs_question_description_de"
            request_allQS = "modelling_question.mod_qs_question_description_de"
        }

        //Retrieve all Categorys
        const category_IDs = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .getMany();

        let cat_ids_array = []
        let cat_advanced
        let cat_beginner
        let cat_professional
        category_IDs.forEach(e=>{
            cat_ids_array.push(e.category_id)
            switch(e.category_name){
                case('Beginner'):cat_beginner = e.category_id
                case('Advanced'):cat_advanced = e.category_id
                case('Professional'):cat_professional = e.category_id
            }
        })    

        //console.log(cat_ids_array)
        const all_QS_Answered = await getRepository(Tg_ModellingEntity)
        .createQueryBuilder("tg_modelling")
        .select("cat_table.category_name","catName")
        .addSelect("mod_qs_table.mod_qs_id","id")
        .addSelect(request,"name")
        .addSelect("tg_modelling.tg_modelling_validation_score","score")
        .innerJoin(TestEntity,'test_table', 'tg_modelling.tg_modelling_id::VARCHAR = test_table.test_solved_test_id ')
        .innerJoin(Modelling_QuestionEntity,'mod_qs_table','tg_modelling.tg_modelling_question_id  = mod_qs_table.mod_qs_id::VARCHAR')
        .innerJoin(CategoryEntity,'cat_table', 'mod_qs_table.mod_qs_categories = cat_table.category_id::VARCHAR')
        .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
        .andWhere("mod_qs_table.mod_qs_categories IN (:...mod_qs_categories)",{mod_qs_categories:cat_ids_array})
        .getRawMany();
        console.log(all_QS_Answered)
        const all_QS = await getRepository(Modelling_QuestionEntity)
        .createQueryBuilder("modelling_question")
        .select("cat_table.category_name","catName")
        .addSelect("modelling_question.mod_qs_id","id")
        .addSelect(request_allQS,"name")
        .addSelect("0","score")
        .innerJoin(CategoryEntity,'cat_table', 'modelling_question.mod_qs_categories = cat_table.category_id::VARCHAR')
        .getRawMany();
        console.log("Parsing Results")
        console.log(all_QS)
        const returnArray = new returnAsArray();
        all_QS.forEach(e=>{
            let ele = new parseReturn(e.catName,e.id,e.name)
            returnArray.append(ele)
        })
        //console.log("Adding Score")
        all_QS_Answered.forEach(e=>{
            returnArray.array.forEach(array_ele=>{
                if(e.id == array_ele.id){
                    array_ele.setScore(e.score)
                }
            })
        })
        //console.log("Adding tutorial finished")
        const intro_status = await getRepository(Tg_IntroEntity)
        .createQueryBuilder("tg_intro")
        .select("cat_table.category_name","catName")
        .addSelect("tg_intro.tg_intro_is_finished","fin")
        .innerJoin(TestEntity,'test_table', 'tg_intro.tg_intro_id::VARCHAR = test_table.test_solved_test_id ')
        .innerJoin(CategoryEntity,'cat_table', 'test_table.test_categorie = cat_table.category_id::VARCHAR')
        .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
        .getRawMany()
        // console.log("intro_status")
        // console.log(returnArray)

        //Get ALL Possible Questions.
        const count_All_Mult_Qs = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .select("multiplechoice_question.multiplechoice_question_id","id")
        .addSelect("multiplechoice_question.multiplechoice_question_categories","cat_id")
        .where("multiplechoice_question.multiplechoice_question_categories IN (:...multiplechoice_question_categories)",{multiplechoice_question_categories:cat_ids_array})
        .getRawMany();
        let countBeginner = 0
        let countAdvanced = 0
        let countProfessi = 0

        count_All_Mult_Qs.forEach(ele=>{
            category_IDs.forEach(e=>{
                if(ele.cat_id == e.category_id){
                    let name = e.category_name
                    switch(name){
                        case "Beginner":{
                            let count_b = countBeginner
                            count_b = count_b+1
                            countBeginner = count_b
                            break;
                        }
                        case "Advanced":{
                            let count_a = countAdvanced
                            count_a = count_a+1
                            countAdvanced = count_a
                            break;                       
                        }
                        case "Professional":{
                            let count_p = countProfessi
                            count_p = count_p+1
                            countProfessi = count_p
                            break;
                        }
                    }
                }
            })
        })   
        //console.log("Set Intro Status")
        returnArray.array.forEach(array_ele=>{
            intro_status.forEach(ele=>{
                if(array_ele.catName == ele.catName){
                    array_ele.setIntro(ele.fin)
                }
            })
        })
        //Get All Correct Questions per Category
        /**
         * Get All Questions answered by user in the given category
        */
        let firstBeg = 0
        let pfirstBeg = await this.getNumberOfWrongAnswersByCat(cat_beginner,user_id,request)
        firstBeg = pfirstBeg
        let firstAdv = 0
        let pfirstAdv = await this.getNumberOfWrongAnswersByCat(cat_advanced,user_id,request)
        firstAdv = pfirstAdv
        let firstProf = 0
        let pfirstProf = await this.getNumberOfWrongAnswersByCat(cat_professional,user_id,request)
        firstProf = pfirstProf

        // category_IDs.forEach(async e=>{
        //     switch(e.category_name){
        //         case "Beginner":{
        //             let num: any = await this.getNumberOfWrongAnswersByCat(e.category_id,user_id,request)
        //             if(num == null){
        //                 num = 0
        //             }
        //             firstBeg = countBeginner-num;
        //             break;
        //         }
        //         case "Advanced":{
        //             let num: any = await this.getNumberOfWrongAnswersByCat(e.category_id,user_id,request)
        //             if(num == null){
        //                 num = 0
        //             }
        //             firstAdv = countAdvanced-num;
        //             break;
        //         }
        //         case "Professional":{
        //             let num: any = await this.getNumberOfWrongAnswersByCat(e.category_id,user_id,request)
        //             if(num == null){
        //                 num = 0
        //             }
        //             firstProf = countProfessi-num;
        //             break;
        //         }
        //     }
        // })
        console.log("Settttt")
        console.log(firstBeg)

        //console.log("Set MC Status")
        returnArray.array.forEach(array_ele=>{
            switch(array_ele.catName){
                case "Beginner":{
                    let score = firstBeg+"/"+countBeginner
                    array_ele.setMcTest(score)
                    break;
                }
                case "Advanced":{
                    let score = firstAdv+"/"+countAdvanced
                    array_ele.setMcTest(score)
                    break;
                }
                case "Professional":{
                    let score = firstProf+"/"+countProfessi
                    array_ele.setMcTest(score)
                    break;
                }
            }
        })

        return returnArray.array
    }

    /**
     * Returns the Requested Page of the Level
     * @param lvl with the ID(Page NUmber)
     * @param id with the choosen Language
     * @param lang
     */
    async getPage(lvl:string, id:number,lang:string){
        let request = ""
        if(lang == 'de'){
            request = "intro.intro_text_de"
        }
        if(lang == 'en'){
            request = "intro.intro_text"
        }
        //Grab LVL
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:lvl})
        .getOne();
        //Get Page by ID
        let result = await this.repository.createQueryBuilder('intro')
        .select("intro.intro_categories","catName")
        .addSelect(request,"intro_text")
        .where("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
        .andWhere("intro.intro_identifier =:intro_identifier",{intro_identifier:id})
        .getRawOne();
        //console.log(result)
        return result;
    }
    async getNumberOfWrongAnswersByCat(cat_id:string,user_id:string,request:string){
        const all_QS_Answered_Correct = await getRepository(Tg_MultiplechoiceEntity)
        .createQueryBuilder("tg_multiplechoice")
        .select("test_table.test_solved_test_id","id")
        //.addSelect("mult_qs_table.multiplechoice_question_description","name")
        //.addSelect(request,"question")
        // .addSelect("mult_qs_ans_given.tg_multiplechoice_answered_answerd","answergiven")
        // .addSelect("mult_qs_ans.multiplechoice_question_answer_true","answercorrect")
        .innerJoin(TestEntity,'test_table', 'tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test_table.test_solved_test_id ')
        // .innerJoin(Multiplechoice_QuestionEntity,'multiplechoice_question','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = multiplechoice_question.multiplechoice_question_id::VARCHAR')
        // .innerJoin(Tg_Multiplechoice_AnsweredEntity,'mult_qs_ans_given','mult_qs_ans_given.tg_multiplechoice_answered_from_qs_id = tg_multiplechoice.tg_multiplechoice_id::VARCHAR')
        // .innerJoin(Multiplechoice_Question_AnswerEntity,'mult_qs_ans','mult_qs_ans_given.tg_multiplechoice_answered_answer_id = multiplechoice_question_answer_id::VARCHAR')
        .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
        .andWhere('test_table.test_categorie = :test_categorie',{test_categorie:cat_id})
        .andWhere('tg_multiplechoice.tg_multiplechoice_solved_correct = true')
        .getRawMany();
        
        let listOfSolvedCorrect = []

        all_QS_Answered_Correct.forEach(solvedC=>{
           listOfSolvedCorrect.push(solvedC.id)
        })

        let a_filterd = this.uniqueArray(listOfSolvedCorrect)
        //  //console.log("ALLIDFDSDSDSDSD")
        //  //console.log(listOfAllIds)
        //   //Get unique List of solved Tests
        //  let a_filterd = this.uniqueArray(listOfAllIds)
        //  console.log("ALL SOLVED TEST ")
        //  console.log(a_filterd)
        //  //Create a list of all QS beeing answerd wrong.
        //  let idToRemove = []
        //  //Answered right
        //  let answeredCorr = []
        //  all_QS_Answered_for_check.forEach(e=>{
        //      if(e.answergiven != e.answercorrect){
        //           idToRemove.push(e.id)
        //      }else{
        //          answeredCorr.push(e.id)
        //      }
        //  })
        //  //Make them to unique arrays
        //  let wrong = this.uniqueArray(idToRemove)
        //  let possible_right = this.uniqueArray(answeredCorr)
         
        //  let def_right = []
        //  possible_right.forEach(ele=>{
        //      const found = wrong.find(wele=> wele == ele)
        //      console.log(found)
        //      if(found === undefined){
        //          //Wenn found undefined ist, ist ele nicht in wrong --> 
        //          //Es ist also richtig
        //          def_right.push(ele)
        //      }
        //  })
        //  console.log("Wurstsalat")
        //  console.log(def_right)
        //  //Wir entfernen alle richtige um nur unbeantwortete zu erhalten.
        //  let all_QS = await getRepository(Multiplechoice_QuestionEntity)
        // .createQueryBuilder("multiplechoice_question")
        // .where('multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories',{multiplechoice_question_categories:cat_id})
        // .getMany();
        // //console.log(all_QS)
        // let return_Array = []
        // all_QS.forEach(e=>{
        //     return_Array.push(e.multiplechoice_question_id)
        // })
        // console.log("ALL QS")
        // console.log(return_Array.length)
        // def_right.forEach(idToRem=>{
        //     return_Array = this.remove_array_element(return_Array,idToRem)
        // })
        // console.log(return_Array.length)
        //Remove all wrong answers from Array to get only right 
        
        // wrong.forEach(idToRem=>{
        //     possible_right = this.remove_array_element(possible_right,idToRem)
        // })
        //  console.log("Not correct Solved")
        //  console.log(possible_right)
         //Remove 
         return a_filterd.length
    }

    async find(): Promise<any[]> {
        let result = await this.repository.find()
        return result
       // return await this.repository.find();
    }

    async create(intro: IntroEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: IntroEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.intro_id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'intro', queryRunner?: QueryRunner): SelectQueryBuilder<IntroEntity> {
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

class parseReturn{
    catName:String
    id:String
    name:String
    score:Number
    intro:Boolean
    mctest:String   
    constructor(catName:String,id:String,name:String){
        this.catName = catName
        this.id = id
        this.name = name 
        this.score = 0
        this.intro = false
        this.mctest = "0/0"
    }
    public setIntro(value:Boolean){
        this.intro = value
    }
    public setScore(value:Number){
        this.score = value
    }
    public setMcTest(value:String){
        this.mctest = value
    }
}

class returnAsArray{
    array:parseReturn[]
    constructor(){
        this.array = []
    }
    public append(value:parseReturn){
        this.array.push(value)
    }
    public getArray(){
        return this.array;
    }

    public sortByCat(){
        let sorted_array = []
        let countB = []
        let countA = []
        let countP = []
        this.array.forEach(e=>{
            let name = e.catName
            switch(name){
                case "Beginner":{
                    countB.push(e)
                    break;
                }
                case "Advanced":{
                    countA.push(e)
                    break;                       
                }
                case "Professional":{
                    countP.push(e)
                    break;
                }
            }
        })
        //console.log(countB)
        sorted_array.concat(countB,countA,countP)
        //console.log(sorted_array)
        this.array = sorted_array
    }

}
