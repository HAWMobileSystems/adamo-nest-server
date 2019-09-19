
import { AbstractEntity } from '../../common/abstract.entity';
import { PermissionDto } from './dto/PermissionDto';
// import { RoleType } from '../../constants/role-type';
// import { PasswordTransformer } from './password.transformer';

import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";
import { RoleType } from 'constants/role-type';
import { RoleEntity } from '../role/role.entity';
import { UserEntity } from '../user/user.entity';

import { ModelEntity } from '../model/model.entity';


@Entity({name: "permissions"})
export class PermissionEntity extends AbstractEntity<PermissionDto>{

    @PrimaryGeneratedColumn("uuid")
    public permissionID: string;

    @ApiModelProperty()
    @Column({nullable: false, type: "uuid" })
    @ManyToOne(type => ModelEntity, model => model.id)
    public modelID: string;

    @ApiModelProperty()
    @Column({nullable: false, type: "uuid" })
    @ManyToOne(type => UserEntity, user => user.id)
    public userID: string;

    @ApiModelProperty()
    @Column({nullable: false, type: "uuid" })
    @ManyToOne(type => RoleEntity, role => role.id)
    public roleID: string;
    
    public toString(): string {
        return `${this.permissionID}`;
    }

    dtoClass = PermissionDto;

}


