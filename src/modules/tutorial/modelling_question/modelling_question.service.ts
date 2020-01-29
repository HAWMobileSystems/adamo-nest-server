import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { Modelling_QuestionEntity } from './modelling_question.entity';
import { Modelling_QuestionRepository } from './modelling_question.repository';
import { CategoryEntity } from '../category/category.entity';
import { Tg_ModellingEntity } from '../tg_modelling/tg_modelling.entity';
import { TestEntity } from '../test/test.entity';

@Injectable()
export class Modelling_QuestionService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Modelling_QuestionRepository
    ) {
    }

    async find(): Promise<Modelling_QuestionEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Modelling_QuestionEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Modelling_QuestionEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'modelling_question', queryRunner?: QueryRunner): SelectQueryBuilder<Modelling_QuestionEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

    /**
     * Method to retrieve a random Question
     * @param lvl
     * 
     * @param user 
     * is the user id, used to make shure only not jet answered questions 
     */
    async getRandomByLvl(user,lvl: string){
        //get Category
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:lvl})
        .getOne();
        //retreive all matching questions
        const result = await this.repository.createQueryBuilder('modelling_question')
        .where("modelling_question.mod_qs_categories = :mod_qs_categories",{mod_qs_categories:getCategory_id.category_id})
        .getMany();
        //retrieve all tests done by the user
        const getallByUser = await getRepository(TestEntity)
        .createQueryBuilder('test')
        .where("test.test_user_id = :test_user_id",{test_user_id:user})
        .getMany();
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

        return result[Math.floor(Math.random()*result.length)];
    }
    /**
     * Gets the Test Of the modelling Qs by ID
     * @param testID 
     */
    async getTestModById(testID: string){
        const result_qs = await getRepository(Tg_ModellingEntity)
        .createQueryBuilder("tg_modelling")
        .where("tg_modelling.tg_modelling_question_id = :tg_modelling_question_id",{tg_modelling_question_id:testID})
        .getOne();
        return result_qs
    }


}
