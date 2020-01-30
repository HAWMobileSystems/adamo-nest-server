
import { AbstractEntity } from '../../common/abstract.entity';
import { PermissionDto } from './dto/PermissionDto';
// import { RoleType } from '../../constants/role-type';
// import { PasswordTransformer } from './password.transformer';

import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import {ApiModelProperty} from "@nestjs/swagger";
import { RoleType } from 'constants/role-type';
import { RoleEntity } from '../role/role.entity';
import { UserEntity } from '../user/user.entity';

import { ModelEntity } from '../model/model.entity';
import { Exclude } from 'class-transformer';


@Entity({name: "permissions"})
export class PermissionEntity extends AbstractEntity<PermissionDto>{

    // @PrimaryGeneratedColumn("uuid")
    // public permissionID: string;

    @ApiModelProperty()
    // @Column({nullable: false, type: "uuid" })
    @OneToOne(type => ModelEntity)
    @JoinColumn()
    public model: ModelEntity;

    @ApiModelProperty()
    // @Column({nullable: false, type: "uuid" })
    @OneToOne(type => UserEntity)
    @JoinColumn()
    public user: UserEntity;

    @ApiModelProperty()
    // @Column({nullable: false, type: "uuid" })
    
    @OneToOne(type => RoleEntity)
    @JoinColumn()
    public role: RoleEntity;
    
    // @Exclude()
    // public toString(): string {
    //     return `${this}`;
    // }
    @Exclude()
    dtoClass = PermissionDto;

}


