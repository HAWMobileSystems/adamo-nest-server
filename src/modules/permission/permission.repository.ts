import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { PermissionEntity } from './permission.entity';

@EntityRepository(PermissionEntity)
export class PermissionRepository extends Repository<PermissionEntity> {}
