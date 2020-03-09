import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult, getRepository, getConnection } from 'typeorm';
import { Tg_IntroEntity } from './tg_intro.entity';
import { Tg_IntroRepository } from './tg_intro.repository';
import { TestEntity } from '../test/test.entity';
import { CategoryEntity } from '../category/category.entity';
import { IntroEntity } from '../intro/intro.entity';

@Injectable()
export class Tg_IntroService {

    async putUserTutorialFinished(user_id: any, cat_name: any,finished: boolean) {
        //Get Cat of Intro
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:cat_name})
        .getOne();
        //Get Intro to Cat
        const intro_id = await getRepository(IntroEntity)
        .createQueryBuilder("intro")
        .where("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
        .getOne();
        //Insert  into User
        const seedTg_Intro = await getConnection()
       .createQueryBuilder()
       .insert()
       .into(Tg_IntroEntity)
       .values([
           {
            tg_intro_intro_id:intro_id.intro_id,
            tg_intro_intro_category:getCategory_id.category_id,
            tg_intro_is_finished:finished,
           }
       ])
       .execute();
       //Put in Test Group
       const test_seed = await getConnection()
       .createQueryBuilder()
       .insert()
       .into(TestEntity)
       .values([{
           test_categorie:getCategory_id.category_id,
           test_solved_test_id:seedTg_Intro.identifiers[0].tg_intro_id,
           test_user_id:user_id,
           //test_tg_identifier:
       }])
       .execute();
       console.log(test_seed)
       console.log("Inserting Intro Finished to DB")      
    }

    constructor(
        // @InjectRepository(Role)
        private readonly repository: Tg_IntroRepository
    ) {
    }

    async find(): Promise<Tg_IntroEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Tg_IntroEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Tg_IntroEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'tg_intro', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_IntroEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
