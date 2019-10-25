import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { IntroEntity } from './intro.entity';
import { IntroRepository } from './intro.repository';

@Injectable()
export class IntroService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: IntroRepository
    ) {
    }

    async find(): Promise<IntroEntity[]> {
        return await this.repository.find();
    }

    async create(intro: IntroEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: IntroEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'intro', queryRunner?: QueryRunner): SelectQueryBuilder<IntroEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
