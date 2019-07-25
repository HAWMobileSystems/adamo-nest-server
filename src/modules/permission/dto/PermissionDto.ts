'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';

import { PermissionEntity } from '../permission.entity';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleType } from '../../../constants/role-type';

export class PermissionDto extends AbstractDto {
    @ApiModelPropertyOptional()
    modelID: string;

    @ApiModelPropertyOptional()
    userID: string;

    @ApiModelPropertyOptional()
    roleID: string;

    @ApiModelPropertyOptional()
    public permissionID: string;

    constructor(permission: PermissionEntity) {
        super(permission);
        this.modelID = permission.modelID;
        this.userID = permission.userID;
        this.roleID = permission.roleID;
        this.permissionID = permission.permissionID;
    }
}
 