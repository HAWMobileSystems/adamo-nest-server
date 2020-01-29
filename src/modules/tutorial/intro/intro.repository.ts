import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { IntroEntity } from './intro.entity';

@EntityRepository(IntroEntity)
export class IntroRepository extends Repository<IntroEntity> {}
