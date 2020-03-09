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
/**
 * @api                 {get} /role/all all
 * @apiDescription      Requests all roles from the database.
 * @apiName             all
 * @apiGroup            role
 * @apiSuccess          {Array} data Array of roles
 * @apiSuccessExample   Success-Response:
 *                      HTTP/1.1 200 OK
 *                      [1, 2, 3, 4, 5, ...]
 * @apiError            error Something went wrong
 * @apiErrorExample     Error-Response:
 *                      HTTP/1.1 400 Failure
 *                      {status: 'Something went wrong', success: false}
 * */

    async find(): Promise<RoleEntity[]> {

        /*
         db.query('select rid, role, read, write, admin from role')
    .then(function (data) {
        console.log('DATA:', data)
        res.send({data: data, success: true});
        })
        .catch(function (error) {
            console.log('ERROR POSTGRES:', error)
            res.status(400).send({status: 'Something went wrong', success: false});
        })
    });

         * 

         */
        return await this.repository.find();
    }

    /**
 * @api                 {post} /role/create create
 * @apiDescription      Checks if post parameter role is set,
 *                      checks if the role exists already in database,
 *                      and if not, creates a new role.
 * @apiName             create
 * @apiGroup            role
 * @apiParam            {String} role Mandatory name of a role
 * @apiSuccess          status Role created successfully
 * @apiSuccessExample   Success-Response:
 *                      HTTP/1.1 200 OK
 *                      {status: 'Role created successfully', success: true}
 * @apiError            error Something went wrong
 * @apiErrorExample     Error-Response:
 *                      HTTP/1.1 400 Failure
 *                      {status: 'Something went wrong', success: false}
 */
    async create(role: RoleEntity) {
        /*
         db.oneOrNone('select role from role where role = $1', [role])
        .then(function (data) {
            if(data){
                res.status(400).send({status: 'Role name already exists'})
            } else {
                const tmpRead = (read == true); 
                const tmpWrite = (write == true);
                const tmpAdmin = (admin == true);
                const tmpQuery = 'insert into role (role, read, write, admin) values ($1, ' + tmpRead + ', ' + tmpWrite + ', ' + tmpAdmin + ')'
                console.log('querylog:', tmpQuery)
                db.oneOrNone(tmpQuery, [role])
                  .then(function (data) {
                    res.send({status: 'Role created successfully', success: true});
                })
                .catch(function (error) {
                    console.log('ERROR POSTGRES:', error)
                    res.status(400).send({status: 'Something went wrong', success: false});
                })
            }
        })
        .catch(function (error) {
            console.log('ERROR POSTGRES:', error)
            res.status(400).send({status: 'Something went wrong', success: false});
        })*/

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
