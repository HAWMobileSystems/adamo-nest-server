import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Multiplechoice_QuestionEntity } from './multiplechoice_question.entity';

@EntityRepository(Multiplechoice_QuestionEntity)
export class Multiplechoice_QuestionRepository extends Repository<Multiplechoice_QuestionEntity> {}
