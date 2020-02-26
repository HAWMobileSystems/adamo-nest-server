import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Tg_MultiplechoiceEntity } from "./tg_multiplechoice.entity";

@EntityRepository(Tg_MultiplechoiceEntity)
export class Tg_MultiplechoiceRepository extends Repository<Tg_MultiplechoiceEntity> {}
