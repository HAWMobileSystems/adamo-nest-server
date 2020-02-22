import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Tg_MultiplechoiceEntity } from "./tg_multiplechoice.entity";
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';

@EntityRepository(Tg_Multiplechoice_AnsweredEntity)
export class Tg_MultiplechoiceRepository extends Repository<Tg_MultiplechoiceEntity> {}
