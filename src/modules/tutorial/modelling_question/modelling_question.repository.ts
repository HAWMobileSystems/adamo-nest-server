import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Modelling_QuestionEntity } from './modelling_question.entity';

@EntityRepository(Modelling_QuestionEntity)
export class Modelling_QuestionRepository extends Repository<Modelling_QuestionEntity> {}
