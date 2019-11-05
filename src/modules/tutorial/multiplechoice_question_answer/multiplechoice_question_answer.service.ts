import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { Multiplechoice_Question_AnswerEntity } from './multiplechoice_question_answer.entity';
import { Multiplechoice_Question_AnswerRepository } from './multiplechoice_question_answer.repository';

@Injectable()
export class Multiplechoice_Question_AnswerService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: Multiplechoice_Question_AnswerRepository
    ) {
    }

    async find(): Promise<Multiplechoice_Question_AnswerEntity[]> {
        return await this.repository.find();
    }

    async create(intro: Multiplechoice_Question_AnswerEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: Multiplechoice_Question_AnswerEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'multiplechoice_question_answer', queryRunner?: QueryRunner): SelectQueryBuilder<Multiplechoice_Question_AnswerEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
