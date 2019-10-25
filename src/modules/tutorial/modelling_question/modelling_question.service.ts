import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Modelling_QuestionEntity } from './modelling_question.entity';
import { Modelling_QuestionRepository } from './modelling_question.repository';

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

}
