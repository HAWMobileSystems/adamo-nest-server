import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Modelling_Question_RulesEntity } from './modelling_question_rules.entity';

@EntityRepository(Modelling_Question_RulesEntity)
export class Modelling_Question_RulesRepository extends Repository<Modelling_Question_RulesEntity> {}
