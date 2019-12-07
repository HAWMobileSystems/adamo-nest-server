import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { IntroEntity } from './intro.entity';
import { IntroRepository } from './intro.repository';
import { CategoryEntity } from '../category/category.entity';

@Injectable()
export class IntroService {
    
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

    async getNextIntroById(next_id: string){
        let result = await this.repository.createQueryBuilder('intro')
        .where("intro.intro_id = :intro_id",{intro_id:next_id})
        .getMany();
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
