import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository } from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { PermissionDto } from './dto/PermissionDto';
// import { PermissionRepository } from './permission.repository';
import { IFile } from '../../interfaces/IFile';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionRepository } from './permission.repository';
import { ModelEntity } from 'modules/model/model.entity';
import { UserEntity } from 'modules/user/user.entity';

@Injectable()
export class PermissionService {

    constructor(
        private readonly repository: PermissionRepository
    ) {
    }

    async list() {
        return await this.repository.find();
    }

    async create(permission: PermissionEntity) {
        return await this.repository.save(permission);
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
    /**
     * Find single Permission
     */
    // findPermission(findData: FindConditions<PermissionEntity>): Promise<PermissionEntity> {
    //     // return this.repository.findOne(findData).then(response => response.);
    // }

    // findPermissionWithPermission( options: Partial<{ permissionname: string, email: string, permission: number }>): Promise<PermissionEntity | undefined> {
    //     // return this.repository.findOneWithPermission()

    // }

    // findPermissionVersions(findData: FindConditions<PermissionEntity>)

    /**
     * Find all permissions
     */
    findPermissions(findData: FindConditions<PermissionEntity>): Promise<PermissionEntity[]> {
        return this.repository.find(findData);
    }

    createQueryBuilder(alias: string = 'permission', queryRunner?: QueryRunner): SelectQueryBuilder<PermissionEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

    async findByPermissionnameOrEmail(options: Partial<{ permissionname: string, email: string }>): Promise<PermissionEntity | undefined> {
        let queryBuilder = this.repository.createQueryBuilder('permission');

        if (options.email) {
            queryBuilder = queryBuilder.orWhere('permission.email = :email', { email: options.email });
        }
        if (options.permissionname) {
            queryBuilder = queryBuilder.orWhere('permission.permissionname = :permissionname', { permissionname: options.permissionname });
        }

        return queryBuilder.getOne();
    }

    async createPermissionForNewModel(model: ModelEntity, user: UserEntity) {
        
    }
    async createPermission(permissionDto: PermissionDto, file: IFile): Promise<PermissionEntity> {
        let avatar: string;
        // if (file && !this.validatorService.isImage(file.mimetype)) {
        //     throw new FileNotImageException();
        // }

        // if (file) {
        //     avatar = await this.awsS3Service.uploadImage(file);
        // }

        // // const permission = this.permissionRepository.create({ ...permissionRegisterDto, avatar });
        const permission = this.repository.create({ ...permissionDto });

        return this.repository.save(permission);

    }
}
