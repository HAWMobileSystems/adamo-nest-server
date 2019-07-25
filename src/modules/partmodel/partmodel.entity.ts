
import { AbstractEntity } from '../../common/abstract.entity';
import { PartModelDto } from './dto/PartModelDto';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";


@Entity({name: "models"})
export class PartModelEntity extends AbstractEntity<PartModelDto>{

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

    dtoClass = PartModelDto;

}


