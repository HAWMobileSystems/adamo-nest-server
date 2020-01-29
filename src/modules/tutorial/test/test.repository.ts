import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { TestEntity } from './test.entity';

@EntityRepository(TestEntity)
export class TestRepository extends Repository<TestEntity> {}
