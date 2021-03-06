import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult, getRepository } from 'typeorm';
import { Multiplechoice_QuestionEntity } from './multiplechoice_question.entity';
import { Multiplechoice_QuestionRepository } from './multiplechoice_question.repository';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice/tg_multiplechoice.entity';
import { CategoryEntity } from '../category/category.entity';
import { TestEntity } from '../test/test.entity';

@Injectable()
export class Multiplechoice_QuestionService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Multiplechoice_QuestionRepository
    ) {
    }

    async find(): Promise<Multiplechoice_QuestionEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Multiplechoice_QuestionEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Multiplechoice_QuestionEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'multiplechoice_question', queryRunner?: QueryRunner): SelectQueryBuilder<Multiplechoice_QuestionEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }
}
