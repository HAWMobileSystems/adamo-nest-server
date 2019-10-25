import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Modelling_RulesEntity } from './modelling_rules.entity';

@EntityRepository(Modelling_RulesEntity)
export class Modelling_RulesRepository extends Repository<Modelling_RulesEntity> {}
