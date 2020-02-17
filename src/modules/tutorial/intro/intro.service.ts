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

@Injectable()
export class IntroService {


    async getAllQsByCatAndUser(user_id: string) {
        //Retrieve all Categorys
        const category_IDs = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .getMany();

        let cat_ids_array = []
        category_IDs.forEach(e=>{
            cat_ids_array.push(e.category_id)
        })
        //get for each intro finished status
        //const all_Intros_solved = await getRepository(Tg_IntroEntity)
        //.createQueryBuilder('tg_intro')
        

        console.log(cat_ids_array)
        const all_QS_Answered = await getRepository(Tg_ModellingEntity)
        .createQueryBuilder("tg_modelling")
        .select("cat_table.category_name","catName")
        .addSelect("mod_qs_table.mod_qs_id","id")
        .addSelect("mod_qs_table.mod_qs_question_description","name")
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
        .addSelect("modelling_question.mod_qs_question_description","name")
        .addSelect("0","score")
        .innerJoin(CategoryEntity,'cat_table', 'modelling_question.mod_qs_categories = cat_table.category_id::VARCHAR')
        .getRawMany();



        // const all_Mult_QS = await getRepository(Multiplechoice_QuestionEntity)
        // .createQueryBuilder("multiplechoice_question")
        // .select("cat_table.category_name","catName")
        // .addSelect("multiplechoice_question.mod_qs_id","id")
        // .addSelect("multiplechoice_question.mod_qs_question_description","name")
        // .addSelect("0","score")
        // .innerJoin(CategoryEntity,'cat_table', 'modelling_question.mod_qs_categories = cat_table.category_id::VARCHAR')
        // .getRawMany();


        const intro_status = await getRepository(Tg_IntroEntity)
        .createQueryBuilder("tg_intro")
        .select("cat_table.category_name","catName")
        .addSelect("tg_intro.tg_intro_is_finished","fin")
        .innerJoin(TestEntity,'test_table', 'tg_intro.tg_intro_id::VARCHAR = test_table.test_solved_test_id ')
        .innerJoin(CategoryEntity,'cat_table', 'test_table.test_categorie = cat_table.category_id::VARCHAR')
        .where('test_table.test_user_id = :test_user_id',{test_user_id:user_id})
        .getRawMany()
        console.log(intro_status)

        const returnMap:Map<String,Map<String,any[]>> = new Map<String,Map<String,any[]>>()

        category_IDs.forEach(e=>{
            let arr:Map<String,any> = new Map<String,any>();
            let smallArr = []
            all_QS.forEach(each_QS=>{
                let smth: Map<String,any> = new Map<String,any>();
                if(each_QS.catName == e.category_name){
                    smth.set("id",each_QS.id)
                    smth.set("catName",each_QS.name)
                    smth.set("score",each_QS.score)
                    // smallArr.push()
                    // smallArr.push()
                    // smallArr.push(each_QS.score)
                }
                all_QS_Answered.forEach(each_QS_Answered =>{
                    if(each_QS.id == each_QS_Answered.id){
                        each_QS.score = each_QS_Answered.score;
                        smallArr.pop()
                        smallArr.push(each_QS_Answered.score)
                    }
                })
                
                
            })
            let intro_arr = []
            intro_status.forEach(each_intro =>{
                if(each_intro.catName == e.category_name){
                    intro_arr.push(each_intro.fin)
                }
                    
            })
            let mult_qs_arr = []
            arr.set("intro_status",intro_arr)
            arr.set("mult_qs_res",mult_qs_arr)
            arr.set("modellingtasks",smallArr)
            returnMap.set("catName:"+e.category_name,arr)
        })
        console.log(returnMap)


        // all_QS.forEach(each_QS=>{
        //     all_QS_Answered.forEach(each_QS_Answered =>{
        //         if(each_QS.id == each_QS_Answered.id){
        //             each_QS.score = each_QS_Answered.score;
        //         }
        //     })
        // })
        

        return returnMap
    }

    // async getAllQsByCatAndUser_OLD(user_id: string) {
    //     //Retrieve all Categorys
    //     const category_IDs = await getRepository(CategoryEntity)
    //     .createQueryBuilder("category")
    //     .getMany();
    //     //console.log(category_IDs)
    //     //Get each corresponding modelling task
    //     const allQsByCat = await Promise.resolve(this.getALlQsByCategory(category_IDs))
    //     console.log(allQsByCat)
    //     const filterQsBySolved = await this.getAllSolvedByQs(allQsByCat)
    //     const filterQsByUser = await this.filterByUser(filterQsBySolved)
    //     const maxValidationScore = await this.getMaxValidationScore(filterQsByUser)
    //     console.log(maxValidationScore)

    //     return maxValidationScore;
    // }
    // async getALlQsByCategory(category_IDs){
    //     console.log("Function: getALlQsByCategory Param:")
    //     console.log(category_IDs)
    //     let return_Array = []
    //     await category_IDs.forEach(async cat => {
    //         //Iterrate over each ModQs Entity
    //         console.log("Here")
    //         let response = await Promise.resolve(this.getQSPerCat(cat))
    //         console.log(response)
    //         //Get all QS solved by User
    //         return_Array.push(response)
    //     });
    //     console.log(return_Array)
    //     return return_Array
    // }
    // async getQSPerCat(cat){
    //     const qsPerLevel = await getRepository(Modelling_QuestionEntity)
    //     .createQueryBuilder("modelling_question")
    //     .where("modelling_question.mod_qs_categories = :mod_qs_categories",{mod_qs_categories:cat.category_id})
    //     .getMany();
    //     return qsPerLevel
    // }
    // getAllSolvedByQs(corresponding_Mods){
    //     console.log("Function: getAllSolvedByQs Param:")
    //     console.log(corresponding_Mods)

    //     let filteredBySolvedQS = []
    //     corresponding_Mods.forEach(async function (mod){
    //         let name = mod.mod_qs_question_text;
    //         //small_Map.push(name);
    //         let id   = mod.mod_qs_id;
    //         //small_Map.push(id);
    //         //Get all Matching Tests
    //         const corresponding_Tests = await getRepository(Tg_ModellingEntity)
    //         .createQueryBuilder("tg_modelling")
    //         .where("tg_modelling.tg_modelling_question_id = :tg_modelling_question_id",{tg_modelling_question_id:mod.mod_qs_id})
    //         .getMany();
    //         console.log("Corr_Test")
    //         console.log(corresponding_Tests)  
    //         filteredBySolvedQS.push(corresponding_Tests)                           
    //     });
    //     console.log(filteredBySolvedQS)
    //     return filteredBySolvedQS
    // }
    // filterByUser(corresponding_Tests){
    //     let result_array = []
    //     //console.log("Function: filterByUser Param:")
    //     //console.log(corresponding_Tests)
    //     corresponding_Tests.forEach(async function(tests){
    //         //console.log(tests)
    //         const all_Solved_By_User = await getRepository(TestEntity)
    //         .createQueryBuilder("test")
    //         .where("test.test_solved_test_id  =:test_solved_test_id",{test_solved_test_id:tests.tg_modelling_id})
    //         .getMany()
    //         result_array.push(all_Solved_By_User);
    //     })
    //     return result_array
    // }
    // getMaxValidationScore(all_Solved_By_User){
    //     let result_array = []
    //    // console.log("Function: getMaxValidationScore Param:")
    //    // console.log(all_Solved_By_User)
    //     all_Solved_By_User.forEach(async function(final){
    //         const final_Tests = await getRepository(Tg_ModellingEntity)
    //         .createQueryBuilder("tg_modelling")
    //         .where("tg_modelling.tg_modelling_question_id = :tg_modelling_question_id",{tg_modelling_question_id:final.test_solved_test_id})
    //         .andWhere("MAX(tg_modelling_validation_score)")
    //         .getRawOne();
    //         result_array.push(final_Tests);
    //     }) 
    //     return result_array; 
    // }

    async getPage(lvl:string, id:number){
        //Grab LVL
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:lvl})
        .getOne();
        //Get Page by ID
        let result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
        .andWhere("intro.intro_identifier =:intro_identifier",{intro_identifier:id})
        .getOne();
        return result;
    }





    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: IntroRepository
    ) {
    }

    async find(): Promise<any[]> {
        let result = await this.repository.find()
        console.log(result);
        return result
       // return await this.repository.find();
    }

    async getCategory(catName: String){
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:catName})
        .getOne();

        let result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
        .getMany();

        return result;
    }

    async getFirstIntroByLevel(lvl: string){
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:lvl})
        .getOne();

        let result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
        .andWhere("intro.intro_is_first =:intro_is_first",{intro_is_first:true})
        .getOne();
        return result;
    }

    async getIntroById(next_id: string){
        let result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_id = :intro_id",{intro_id:next_id})
        .getOne();
        return result;
    }

    async getPrevIntroByCurrentID(id: string){
        let result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_next_id = :intro_next_id",{intro_next_id:id})
        .getOne();
        return result;
    }

    async getRandomByLvl(lvl: string){
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:lvl})
        .getOne();

        const result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
        .getMany();

        return result[Math.floor(Math.random()*result.length)];
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

}
