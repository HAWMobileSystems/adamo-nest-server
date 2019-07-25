import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository, UpdateResult } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleDto } from './dto/RoleDto';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
    

    constructor(
        // @InjectRepository(Role)
        private readonly repository: RoleRepository
    ) {
    }

    async find(): Promise<RoleEntity[]> {
        return await this.repository.find();
    }

    async create(role: RoleEntity) {
        return await this.repository.save(role);
    }

    async update(role: RoleEntity): Promise<UpdateResult> {
        return await this.repository.update(role.id, role);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
    /**
     * Find single Role
     */
    // findRole(findData: FindConditions<RoleEntity>): Promise<RoleEntity> {
    //     return this.repository.findOne(findData).then(response => response.);
    // }

    // findRoleWithPermission( options: Partial<{ rolename: string, email: string, permission: number }>): Promise<RoleEntity | undefined> {
    //     return this.repository.findOneWithPermission()

    // }

    // findRoleVersions(findData: FindConditions<RoleEntity>)

    /**
     * Find all roles
     */
    // findRoles(findData: FindConditions<RoleEntity>): Promise<RoleEntity[]> {
    //     return this.repository.find(findData);
    // }

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

    async createRole(roleDto: RoleDto): Promise<RoleEntity> {
        let avatar: string;
        // if (file && !this.validatorService.isImage(file.mimetype)) {
        //     throw new FileNotImageException();
        // }

        // if (file) {
        //     avatar = await this.awsS3Service.uploadImage(file);
        // }

        const role = this.repository.create({ ...roleDto });

        return this.repository.save(role);

    }
}
