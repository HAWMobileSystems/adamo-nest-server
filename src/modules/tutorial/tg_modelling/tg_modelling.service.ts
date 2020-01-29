import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import {Tg_ModellingRepository } from "./tg_modelling.repository";
import { Tg_ModellingEntity } from './tg_modelling.entity';

@Injectable()
export class Tg_ModellingService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Tg_ModellingRepository
    ) {
    }

    async find(): Promise<Tg_ModellingEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Tg_ModellingEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Tg_ModellingEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'tg_modelling', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_ModellingEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
