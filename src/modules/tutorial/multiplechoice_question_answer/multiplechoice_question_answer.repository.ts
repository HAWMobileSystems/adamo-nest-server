import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Multiplechoice_Question_AnswerEntity } from './multiplechoice_question_answer.entity';

@EntityRepository(Multiplechoice_Question_AnswerEntity)
export class Multiplechoice_Question_AnswerRepository extends Repository<Multiplechoice_Question_AnswerEntity> {}
