import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Tg_IntroEntity } from './tg_intro.entity';
import { Tg_IntroRepository } from './tg_intro.repository';

@Injectable()
export class Tg_IntroService {
    
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
