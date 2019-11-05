import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Tg_Multiplechoice_AnsweredRepository } from "./tg_multiplechoice_answered.repository";
import { Tg_Multiplechoice_AnsweredEntity } from "./tg_multiplechoice_answered.entity";

@Injectable()
export class Tg_Multiplechoice_AnsweredService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Tg_Multiplechoice_AnsweredRepository
    ) {
    }

    async find(): Promise<Tg_Multiplechoice_AnsweredEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Tg_Multiplechoice_AnsweredEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Tg_Multiplechoice_AnsweredEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'tg_modelling', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_Multiplechoice_AnsweredEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
