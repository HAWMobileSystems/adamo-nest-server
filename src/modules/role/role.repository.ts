import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { RoleEntity } from './role.entity';

@EntityRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity> {}
