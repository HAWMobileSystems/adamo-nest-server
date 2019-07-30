import { Repository, Connection } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ModelEntity } from './model.entity';
// import { PermissionEntity } from 'modules/permission/permission.entity';

@EntityRepository(ModelEntity)
export class ModelRepository extends Repository<ModelEntity> {

    // public async findeOneByPermission(modelID: string, permission: PermissionEntity) {
    //     const queryPermission = await this.manager.getRepository(PermissionEntity).createQueryBuilder('permission').where('mid  = modelID AND uid = userID').getOne();
    //     const model = await this.manager.getRepository(ModelEntity).createQueryBuilder('model').where('mid = modelID AND version = modelVersion').getOne();
    //     model
    // }
}
