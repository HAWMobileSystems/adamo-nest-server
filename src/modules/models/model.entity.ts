
import { AbstractEntity } from '../../common/abstract.entity';
import { ModelDto } from './dto/ModelDto';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";


@Entity({name: "models"})
export class ModelEntity extends AbstractEntity<ModelDto>{

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public modelName: string;

    // @ApiModelProperty()
    // @Column({nullable: false})
    // public timestampLastChange: number;

    @ApiModelProperty()
    @Column({nullable: false})
    public modelXML: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public modelVersion: number;

    public toString(): string {
        return `${this.modelName}`;
    }

    dtoClass = ModelDto;

}


