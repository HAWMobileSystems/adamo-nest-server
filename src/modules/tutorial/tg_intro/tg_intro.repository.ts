import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Tg_IntroEntity } from './tg_intro.entity';

@EntityRepository(Tg_IntroEntity)
export class Tg_IntroRepository extends Repository<Tg_IntroEntity> {}
