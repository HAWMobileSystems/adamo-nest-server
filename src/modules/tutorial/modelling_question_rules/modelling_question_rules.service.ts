import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Modelling_Question_RulesEntity } from './modelling_question_rules.entity';
import { Modelling_Question_RulesRepository } from './modelling_question_rules.repository';

@Injectable()
export class Modelling_Question_RulesService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Modelling_Question_RulesRepository
    ) {
    }

    async find(): Promise<Modelling_Question_RulesEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Modelling_Question_RulesEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Modelling_Question_RulesEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'modelling_question_rules', queryRunner?: QueryRunner): SelectQueryBuilder<Modelling_Question_RulesEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
