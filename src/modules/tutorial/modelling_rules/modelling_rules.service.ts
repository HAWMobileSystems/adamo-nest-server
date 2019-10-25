import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Modelling_RulesEntity } from './modelling_rules.entity';
import { Modelling_RulesRepository } from './modelling_rules.repository';

@Injectable()
export class Modelling_RulesService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Modelling_RulesRepository
    ) {
    }

    async find(): Promise<Modelling_RulesEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Modelling_RulesEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Modelling_RulesEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'modelling_rules', queryRunner?: QueryRunner): SelectQueryBuilder<Modelling_RulesEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
