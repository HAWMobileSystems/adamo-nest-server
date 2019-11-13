import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Tg_MultiplechoiceRepository } from "./tg_multiplechoice.repository";
import { Tg_MultiplechoiceEntity } from "./tg_multiplechoice.entity";

@Injectable()
export class Tg_MultiplechoiceService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Tg_MultiplechoiceRepository
    ) {
    }

    async find(): Promise<Tg_MultiplechoiceEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Tg_MultiplechoiceEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Tg_MultiplechoiceEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'tg_multiplechoice', queryRunner?: QueryRunner): SelectQueryBuilder<Tg_MultiplechoiceEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
