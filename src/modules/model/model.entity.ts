
import { AbstractEntity } from '../../common/abstract.entity';
import { ModelDto } from './dto/ModelDto';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";
import { Exclude } from 'class-transformer';


@Entity({name: "models"})
export class ModelEntity extends AbstractEntity<ModelDto>{

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ApiModelProperty()
    @Column({unique: true, nullable: false})
    public modelName: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public modelXML: string;

    @ApiModelProperty()
    @Column({unique: true, nullable: false})
    public modelVersion: number;

    @Exclude()
    public toString(): string {
        return `${this.modelName}`;
    }

    @Exclude()
    dtoClass = ModelDto;

}


