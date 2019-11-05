import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Tg_ModellingEntity } from './tg_modelling.entity';

@EntityRepository(Tg_ModellingEntity)
export class Tg_ModellingRepository extends Repository<Tg_ModellingEntity> {}
