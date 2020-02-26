import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult } from 'typeorm';
import { TestEntity } from './test.entity';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
    solveMultiplechoice(user_id:string,task_id:string,solution:any) {
        
    }
    
    constructor(
        // @InjectRepository(Role)
        private readonly repository: TestRepository
    ) {
    }

    async find(): Promise<TestEntity[]> {
        return await this.repository.find();
    }

    async create(intro: TestEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: TestEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'test', queryRunner?: QueryRunner): SelectQueryBuilder<TestEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }

}
