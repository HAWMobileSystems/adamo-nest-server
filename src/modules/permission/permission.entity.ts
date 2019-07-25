
import { AbstractEntity } from '../../common/abstract.entity';
import { PermissionDto } from './dto/PermissionDto';
// import { RoleType } from '../../constants/role-type';
// import { PasswordTransformer } from './password.transformer';

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";
import { RoleType } from 'constants/role-type';
import { RoleEntity } from 'modules/role/role.entity';


@Entity({name: "permissions"})
export class PermissionEntity extends AbstractEntity<PermissionDto>{

    @PrimaryGeneratedColumn("uuid")
    public permissionID: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public modelID: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public userID: string;

    @ApiModelProperty()
    @Column({nullable: false})
    public roleID: string;
    
    public toString(): string {
        return `${this.permissionID}`;
    }

    dtoClass = PermissionDto;

}


