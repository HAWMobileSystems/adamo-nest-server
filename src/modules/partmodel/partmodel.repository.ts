import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ModelEntity } from './partmodel.entity';

@EntityRepository(ModelEntity)
export class PartModelRepository extends Repository<PartModelEntity> {}
