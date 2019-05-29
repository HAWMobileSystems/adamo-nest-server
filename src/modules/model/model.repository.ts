import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ModelEntity } from './model.entity';

@EntityRepository(ModelEntity)
export class ModelRepository extends Repository<ModelEntity> {}
