import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository } from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { PermissionRegisterDto } from '../dto/PermissionRegisterDto';
import { PermissionRepository } from './permission.repository';
import { IFile } from '../../interfaces/IFile';
import { ValidatorService } from '../../shared/services/validator.service';
import { FileNotImageException } from '../../exceptions/file-not-image.exception';
import { AwsS3Service } from '../../shared/services/aws-s3.service';

@Injectable()
export class PermissionService {
    

    constructor(
        // @InjectRepository(Permission)
        private readonly repository: Repository<PermissionEntity>
    ) {
    }

    list() {
        return this.repository.find();
    }

    create(permission: PermissionEntity) {
        return this.repository.insert(permission);
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

    async createPermission(permissionRegisterDto: PermissionRegisterDto, file: IFile): Promise<PermissionEntity> {
        let avatar: string;
        // if (file && !this.validatorService.isImage(file.mimetype)) {
        //     throw new FileNotImageException();
        // }

        // if (file) {
        //     avatar = await this.awsS3Service.uploadImage(file);
        // }

        // // const permission = this.permissionRepository.create({ ...permissionRegisterDto, avatar });
        // const permission = this.permissionRepository.create({ ...permissionRegisterDto });

        // return this.permissionRepository.save(permission);

    }
}
