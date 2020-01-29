import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
    
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
