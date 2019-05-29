import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleRegisterDto } from '../auth/dto/RoleRegisterDto';
import { RoleRepository } from '../role.repository
import { IFile } from '../../interfaces/IFile';
import { ValidatorService } from '../../shared/services/validator.service';
import { FileNotImageException } from '../../exceptions/file-not-image.exception';
import { AwsS3Service } from '../../shared/services/aws-s3.service';

@Injectable()
export class RoleService {
    

    constructor(
        // @InjectRepository(Role)
        private readonly repository: Repository<RoleEntity>
    ) {
    }

    list() {
        return this.repository.find();
    }

    create(role: Role) {
        return this.repository.insert(role);
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
    /**
     * Find single Role
     */
    findRole(findData: FindConditions<RoleEntity>): Promise<RoleEntity> {
        return this.repository.findOne(findData).then(response => response.);
    }

    findRoleWithPermission( options: Partial<{ rolename: string, email: string, permission: number }>): Promise<RoleEntity | undefined> {
        return this.repository.findOneWithPermission()

    }

    findRoleVersions(findData: FindConditions<RoleEntity>)

    /**
     * Find all roles
     */
    findRoles(findData: FindConditions<RoleEntity>): Promise<RoleEntity[]> {
        return this.repository.find(findData);
    }

    createQueryBuilder(alias: string = 'role', queryRunner?: QueryRunner): SelectQueryBuilder<RoleEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

    async findByRolenameOrEmail(options: Partial<{ rolename: string, email: string }>): Promise<RoleEntity | undefined> {
        let queryBuilder = this.repository.createQueryBuilder('role');

        if (options.email) {
            queryBuilder = queryBuilder.orWhere('role.email = :email', { email: options.email });
        }
        if (options.rolename) {
            queryBuilder = queryBuilder.orWhere('role.rolename = :rolename', { rolename: options.rolename });
        }

        return queryBuilder.getOne();
    }

    async createRole(roleRegisterDto: RoleRegisterDto, file: IFile): Promise<RoleEntity> {
        let avatar: string;
        if (file && !this.validatorService.isImage(file.mimetype)) {
            throw new FileNotImageException();
        }

        if (file) {
            avatar = await this.awsS3Service.uploadImage(file);
        }

        // const role = this.roleRepository.create({ ...roleRegisterDto, avatar });
        const role = this.roleRepository.create({ ...roleRegisterDto });

        return this.roleRepository.save(role);

    }
}
