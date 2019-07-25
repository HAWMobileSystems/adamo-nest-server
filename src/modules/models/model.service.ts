import { Injectable } from '@nestjs/common';
import {
    FindConditions,
    QueryRunner,
    SelectQueryBuilder,
    Repository,
} from 'typeorm';
import { ModelEntity } from './model.entity';
import { ModelRepository } from './model.repository';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModelService {
    constructor(
        // @InjectRepository(ModelEntity)
        private readonly repository: ModelRepository,
    ) {}

    list() {
        // return this.repository.find();
    }

}
