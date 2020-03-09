import { Injectable } from '@nestjs/common';
import {
    FindConditions,
    QueryRunner,
    SelectQueryBuilder,
    Repository,
} from 'typeorm';
import { PermissionEntity } from './permission.entity';
import { PermissionDto } from './dto/PermissionDto';
// import { PermissionRepository } from './permission.repository';
import { IFile } from '../../interfaces/IFile';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionRepository } from './permission.repository';
import { ModelEntity } from '../model/model.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class PermissionService {
    async getPermissionByUserAndModel(userID: string, modelID: string) {
        return await this.repository.query(
            `
            SELECT * 
            FROM permissions
            LEFT JOIN roles ON permissions.role_id = roles.id 
            WHERE user_id = '${userID}' AND model_id = '${modelID}'
            LIMIT 1
            `,
        );
        // return this.repository.findOne (
        //     {
        //         join: {
        //             alias: "roles",
        //             leftJoinAndSelect: {
        //                 roles: "roles.id",
        //             }
        //         },
        //         where: {
        //             user_id: userID,
        //             model_id: modelID
        //         }
        //     }
        // )

        // return this.repository.createQueryBuilder('permissions')
        // // .select()
        // .from(PermissionEntity, "permission")
        // .leftJoinAndSelect("permission.roleID", "roles")
        // .where("permission.userID = :uid", { uid: userID })
        // .andWhere("permission.modelID = :mid", { mid: modelID })
        // .getOne()

        // return await this.repository.find(

        //     {
        //         where:
        //     }
        // )
    }

    constructor(private readonly repository: PermissionRepository) {}

    async list() {
        return await this.repository.find();
    }

    async create(permission: PermissionEntity) {
        /*
         return await this.repository.query(
            `
           'INSERT INTO permission' +
            '(mid, uid, rid) ' +
            'SELECT $1, $2, rid ' +
            'FROM role ' +
            'WHERE role = $3', [req.body.mid, req.body.uid, req.body.role])
            `
        )
        */
        return await this.repository.save(permission);
    }

    async update(permission: PermissionEntity) {
        
        //  return await this.repository.query(
        //     `
        //    'INSERT INTO permission' +
        //     '(modelID, userID, roleID) ' +
        //     'SELECT , $2, rid ' +
        //     'FROM role ' +
        //     'WHERE role = $3', [req.body.mid, req.body.uid, req.body.role])
        //     `
        // )
        

        // this.repository.createQueryBuilder().update(PermissionEntity)
        // .set({ roleID: "permission.", lastName: "Saw" })
        // .where("id = :id", { id: 1 })
        // .execute();

        return await this.repository.update(permission.id, permission);
    }
    async delete(id: string) {
        return await this.repository.delete(id);
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
    findPermissions(
        findData: FindConditions<PermissionEntity>,
    ): Promise<PermissionEntity[]> {
        return this.repository.find(findData);
    }

    createQueryBuilder(
        alias: string = 'permission',
        queryRunner?: QueryRunner,
    ): SelectQueryBuilder<PermissionEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

    async findByPermissionnameOrEmail(
        options: Partial<{ permissionname: string; email: string }>,
    ): Promise<PermissionEntity | undefined> {
        let queryBuilder = this.repository.createQueryBuilder('permission');

        if (options.email) {
            queryBuilder = queryBuilder.orWhere('permission.email = :email', {
                email: options.email,
            });
        }
        if (options.permissionname) {
            queryBuilder = queryBuilder.orWhere(
                'permission.permissionname = :permissionname',
                { permissionname: options.permissionname },
            );
        }

        return queryBuilder.getOne();
    }

    async createPermissionForNewModel(model: ModelEntity, user: UserEntity) {}
    async createPermission(
        permissionDto: PermissionDto,
        file: IFile,
    ): Promise<PermissionEntity> {
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
