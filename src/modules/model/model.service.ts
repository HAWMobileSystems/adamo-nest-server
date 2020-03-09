import { Injectable, Post } from '@nestjs/common';
import {
    FindConditions,
    QueryRunner,
    SelectQueryBuilder,
    Repository,
} from 'typeorm';
import { ModelEntity } from './model.entity';
import { ModelRepository } from './model.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { Logger } from '@nestjs/common';
import { ModelDto } from './dto/ModelDto';
import { ModelWithUserPermissionDto } from './dto/ModelWithUserPermissionDto';
@Injectable()
export class ModelService {
    /*
    'SELECT m.mid AS mid, m.modelname AS modelname, m.lastchange AS lastchange, m.modelxml AS modelxml, m.version AS version, r.read AS read, r.write as write ' +
    'FROM model m ' +
    'LEFT JOIN permission p ON p.mid = m.mid ' +
    'LEFT JOIN role r ON r.rid = p.rid ' +
    'WHERE uid = $1 ' +
    'ORDER BY modelname ASC, version DESC', [req.session.user.id])
    */
    async findModelbyUserPermission(userid: string) : Promise<ModelWithUserPermissionDto[]> {
        return await this.repository.query(` 
            SELECT model.id::text, model.model_name, model.model_XML, model.model_version, role.can_read, role.can_write
            FROM models model
            LEFT JOIN permissions permission ON model.id = permission.model_id 
            LEFT JOIN roles role ON role.id = permission.role_id
            WHERE permission.user_id = '${userid}'  
            ORDER BY model.model_name ASC, model.model_version DESC
        `);
        // return await this.repository.find({
        //     // select: ['id'],
        //     relations: ["permission", "role"],
        //     where: [{ userID: userid }],

        //     order: {
        //         modelName: "ASC",
        //         version: "DESC"
        //     }
        // });
    }

    async findModelById(id: string) {
        throw new Error('Method not implemented.');
    }
    async findModelByIdAndVersion(id: string, version: number) {
        return await this.repository
            .createQueryBuilder('models')
            .where('models.id = :id', { id: id })
            .andWhere('models.model_version = :version', { version: version })
            .getOne();
        throw new Error('Method not implemented.');
    }
    constructor(
        public readonly repository: ModelRepository, // @InjectRepository(ModelEntity) // private readonly repository: Repository<ModelEntity>,
    ) {}

    async create(model: ModelEntity): Promise<ModelEntity> {
        Logger.log(`ModelService create ${ JSON.stringify(model)}`);
        return await this.repository.save(model);
    }

    async findOneOrFail(id: string) {
        return await this.repository.findOneOrFail(id);
    }

    async list() {
        return await this.repository.find();
    }

    async getChangedModels() {
        const dateNow = new Date();
        const date7DaysAgo = new Date(dateNow.getDate() - 7);
        return await this.repository
            .createQueryBuilder('models')
            .where('models.updatedAt >= :timestamp', { timestamp: date7DaysAgo })
            .getMany();
    }

    async update(model: ModelEntity) {
        return this.repository.save(model);
    }


    async deleteAllVersions(id: string) {
        this.repository.delete(id)

        // Delete Partialmodel
        // Delete Permission

    }

    async deleteVersion(id: string) {
        this.repository.delete(id)

        // Delete Partialmodel
        // Delete Permission

    }

    // create(model: ModelEntity) {
    //     return this.repository.insert(model);
    // }

    // delete(id: string) {
    //     return this.repository.delete(id);
    // }

    // deleteAll(id: string) {
    //     // this.repository.deleteAllVersions(id);
    // }
    /**
     * Find single Model
     */
    // findModel(findData: FindConditions<ModelEntity>): Promise<ModelEntity> {
    //     return this.repository.findOne(findData).then(response => response.);
    // }

    // findModelWithPermission( options: Partial<{ modelname: string, email: string, permission: number }>): Promise<ModelEntity | undefined> {
    //     // return this.repository.findOneWithPermission()

    // }

    /**
     * Find all models
     */
    findModelVersions(
        findData: FindConditions<ModelEntity>,
    ): Promise<ModelEntity[]> {
        return this.repository.find(findData);
    }

    createQueryBuilder(
        alias: string = 'model',
        queryRunner?: QueryRunner,
    ): SelectQueryBuilder<ModelEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

    async findByModelnameOrEmail(
        options: Partial<{ modelname: string; email: string }>,
    ): Promise<ModelEntity | undefined> {
        let queryBuilder = this.repository.createQueryBuilder('model');

        if (options.email) {
            queryBuilder = queryBuilder.orWhere('model.email = :email', {
                email: options.email,
            });
        }
        if (options.modelname) {
            queryBuilder = queryBuilder.orWhere(
                'model.modelname = :modelname',
                { modelname: options.modelname },
            );
        }

        return queryBuilder.getOne();
    }

    //     async createModel(modelRegisterDto: ModelRegisterDto, file: IFile): Promise<ModelEntity> {
    //         let avatar: string;

    //         // // const model = this.modelRepository.create({ ...modelRegisterDto, avatar });
    //         // const model = this.modelRepository.create({ ...modelRegisterDto });

    //         // return this.modelRepository.save(model);

    //     }
}
