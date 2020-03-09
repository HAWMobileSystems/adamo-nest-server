import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult, getRepository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import e = require('express');
import { TestEntity } from '../test/test.entity';
import { Tg_ModellingEntity } from '../tg_modelling/tg_modelling.entity';
import { Modelling_QuestionEntity } from '../modelling_question/modelling_question.entity';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice/tg_multiplechoice.entity';
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import { Multiplechoice_Question_AnswerEntity } from '../multiplechoice_question_answer/multiplechoice_question_answer.entity';

@Injectable()
export class CategoryService {
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: CategoryRepository
    ) {
    }

    async find(): Promise<CategoryEntity[]> {
        return await this.repository.find();
    }

    async create(intro: CategoryEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: CategoryEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.category_id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'category', queryRunner?: QueryRunner): SelectQueryBuilder<CategoryEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}