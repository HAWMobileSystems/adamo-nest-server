import { Injectable } from '@nestjs/common';
import {
    FindConditions,
    QueryRunner,
    SelectQueryBuilder,
    Repository,
    UpdateResult,
    getConnection,
} from 'typeorm';
import { PartModelEntity } from './partmodel.entity';
import { PartModelRepository } from './partmodel.repository';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartModelService {
    constructor(
        // @InjectRepository(ModelEntity)
        private readonly repository: PartModelRepository,
    ) {}

    async list() {
        return await this.repository.find();
    }

    async find(): Promise<PartModelEntity[]> {
        return await this.repository.find();
    }

    async create(role: PartModelEntity) {
        return await this.repository.save(role);
    }

    async update(role: PartModelEntity): Promise<UpdateResult> {
        return await this.repository.update(role.id, role);
    }

    async delete(id: string, version : string) {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(PartModelEntity)
        .where("id = :id", { id: id, version: version })
        .execute();
        // return await getConnection().createQueryBuilder().delete().where()
        // return await this.repository.delete(id, version);
    }

    async isUsedBy(partmodel: PartModelEntity): Promise<any> {
        
        const isUsedByModels = await getConnection()
            .createQueryBuilder()
            .select('partmodel')

            //.leftJoinAndSelect(ModelEntity, "model", "partmodel.mid = model.id")
            //.leftJoinAndSelect(ModelEntity, "model", "partmodel.version = model.version")
            .leftJoinAndSelect("partmodel.mid", "model")
            .from(PartModelEntity, 'partmodel')
            .where('partmodel.pmid = :pmid', { pmid: partmodel.id })
            .orderBy('partmodel.modelname', "ASC")
            .addOrderBy("partmodel.version", "DESC")
            .getMany();

            /*
.orderBy({
        "user.name": "ASC",
        "user.id": "DESC"
    });
            */
        // const pmid = req.body.pmid;

        // db.query('
        //select p.mid AS mid,p.version AS version, m.modelname AS modelname 
        //FROM partialmodel AS p JOIN model AS m ON p.mid=m.mid AND p.version=m.version 
        //WHERE p.pmid = $1 ORDER BY modelname ASC, version DESC', [pmid])
        //     .then(function (data) {
        //         if(data){
        //             console.log('data is ', data);
        //             res.send({data: data, success: true});
        //         } else {
        //             res.status(400).send({status: 'Model does not exist', success: false})
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log('ERROR POSTGRES:', error)
        //         res.status(400).send({status: 'Something went wrong', success: false});
        //     })
        // TODO Querybuilder
        return await '';
    }
}
