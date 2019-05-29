
import { AbstractEntity } from '../../common/abstract.entity';
import { PermissionDto } from './dto/PermissionDto';
// import { RoleType } from '../../constants/role-type';
// import { PasswordTransformer } from './password.transformer';

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";


@Entity({name: "permissions"})
export class PermissionEntity extends AbstractEntity<PermissionDto>{

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public permissionName: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public timestampLastChange: number;

    @ApiModelProperty()
    @Column({nullable: false})
    public permissionXML: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public permissionVersion: number;

    public toString(): string {
        return `${this.permissionName}`;
    }

    dtoClass = PermissionDto;

}


