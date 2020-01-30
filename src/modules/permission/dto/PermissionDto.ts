'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';

import { PermissionEntity } from '../permission.entity';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleType } from '../../../constants/role-type';
import { ModelEntity } from 'modules/model/model.entity';
import { UserEntity } from 'modules/user/user.entity';
import { RoleEntity } from 'modules/role/role.entity';

export class PermissionDto extends AbstractDto {
    @ApiModelPropertyOptional()
    model: ModelEntity;

    @ApiModelPropertyOptional()
    user: UserEntity;

    @ApiModelPropertyOptional()
    role: RoleEntity;

    // @ApiModelPropertyOptional()
    // public permissionID: string;

    constructor(permission: PermissionEntity) {
        super(permission);
        this.model = permission.model;
        this.user = permission.user;
        this.role = permission.role;
    }
}
 