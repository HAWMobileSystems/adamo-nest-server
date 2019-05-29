import { Injectable } from '@nestjs/common';
import { FindConditions, QueryRunner, SelectQueryBuilder, Repository } from 'typeorm';
import { ModelEntity } from './model.entity';
import { ModelRegisterDto } from '../auth/dto/ModelRegisterDto';
import { ModelRepository } from './model.repository';
import { IFile } from '../../interfaces/IFile';
import { ValidatorService } from '../../shared/services/validator.service';
import { FileNotImageException } from '../../exceptions/file-not-image.exception';
import { AwsS3Service } from '../../shared/services/aws-s3.service';

@Injectable()
export class ModelService {
    

    constructor(
        // @InjectRepository(Model)
        private readonly repository: Repository<ModelEntity>
    ) {
    }

    list() {
        return this.repository.find();
    }

    create(model: Model) {
        return this.repository.insert(model);
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
    /**
     * Find single Model
     */
    findModel(findData: FindConditions<ModelEntity>): Promise<ModelEntity> {
        return this.repository.findOne(findData).then(response => response.);
    }

    findModelWithPermission( options: Partial<{ modelname: string, email: string, permission: number }>): Promise<ModelEntity | undefined> {
        return this.repository.findOneWithPermission()

    }

    findModelVersions(findData: FindConditions<ModelEntity>)

    /**
     * Find all models
     */
    findModels(findData: FindConditions<ModelEntity>): Promise<ModelEntity[]> {
        return this.repository.find(findData);
    }

    createQueryBuilder(alias: string = 'model', queryRunner?: QueryRunner): SelectQueryBuilder<ModelEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

    async findByModelnameOrEmail(options: Partial<{ modelname: string, email: string }>): Promise<ModelEntity | undefined> {
        let queryBuilder = this.repository.createQueryBuilder('model');

        if (options.email) {
            queryBuilder = queryBuilder.orWhere('model.email = :email', { email: options.email });
        }
        if (options.modelname) {
            queryBuilder = queryBuilder.orWhere('model.modelname = :modelname', { modelname: options.modelname });
        }

        return queryBuilder.getOne();
    }

    async createModel(modelRegisterDto: ModelRegisterDto, file: IFile): Promise<ModelEntity> {
        let avatar: string;
        if (file && !this.validatorService.isImage(file.mimetype)) {
            throw new FileNotImageException();
        }

        if (file) {
            avatar = await this.awsS3Service.uploadImage(file);
        }

        // const model = this.modelRepository.create({ ...modelRegisterDto, avatar });
        const model = this.modelRepository.create({ ...modelRegisterDto });

        return this.modelRepository.save(model);

    }
}
