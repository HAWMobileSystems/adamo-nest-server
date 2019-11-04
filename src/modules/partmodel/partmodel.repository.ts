import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { PartModelEntity } from './partmodel.entity';

@EntityRepository(PartModelEntity)
export class PartModelRepository extends Repository<PartModelEntity> {}
