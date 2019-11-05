import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Tg_Multiplechoice_AnsweredEntity } from "./tg_multiplechoice_answered.entity";

@EntityRepository(Tg_Multiplechoice_AnsweredRepository)
export class Tg_Multiplechoice_AnsweredRepository extends Repository<Tg_Multiplechoice_AnsweredEntity> {}
