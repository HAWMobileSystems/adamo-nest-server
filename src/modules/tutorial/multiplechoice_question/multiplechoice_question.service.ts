import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { Multiplechoice_QuestionEntity } from './multiplechoice_question.entity';
import { Multiplechoice_QuestionRepository } from './multiplechoice_question.repository';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice/tg_multiplechoice.entity';
import { CategoryEntity } from '../category/category.entity';
import { TestEntity } from '../test/test.entity';

@Injectable()
export class Multiplechoice_QuestionService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Multiplechoice_QuestionRepository
    ) {
    }

    async find(): Promise<Multiplechoice_QuestionEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Multiplechoice_QuestionEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Multiplechoice_QuestionEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'multiplechoice_question', queryRunner?: QueryRunner): SelectQueryBuilder<Multiplechoice_QuestionEntity> {
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
        const result = await this.repository.createQueryBuilder('multiplechoice_question')
        .where("multiplechoice_question.multiplechoice_question_categories = :multiplechoice_question_categories",{multiplechoice_question_categories:getCategory_id.category_id})
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
            const result_qs = await getRepository(Tg_MultiplechoiceEntity)
            .createQueryBuilder("tg_multiplechoice")
            .where("tg_multiplechoice.tg_multiplechoice_id = :tg_multiplechoice_id",{tg_multiplechoice_id:allQsId[i]})
            .getOne();
            if(result_qs != undefined){
                const zw_result = await getRepository(Multiplechoice_QuestionEntity)
                .createQueryBuilder("multiplechioce_question")
                .where("multiplechioce_question.multiplechoice_question_id = :multiplechoice_question_id",{multiplechoice_question_id:result_qs.tg_multiplechoice_id})
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

}
