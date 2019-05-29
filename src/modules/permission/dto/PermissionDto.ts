'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';

import { PermissionEntity } from '../permission.entity';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleType } from '../../../constants/role-type';

export class PermissionDto extends AbstractDto {
    @ApiModelPropertyOptional()
    permissionName: string;

    @ApiModelPropertyOptional()
    timestampLastChange: number;

    @ApiModelPropertyOptional()
    permissionXML: string;

    @ApiModelPropertyOptional()
    id: string;

    @ApiModelPropertyOptional()
    public permissionVersion: number;

    constructor(permission: PermissionEntity) {
        super(permission);
        this.permissionName = permission.permissionName;
        this.id = permission.id;
        this.permissionVersion = permission.permissionVersion;
        this.timestampLastChange= permission.timestampLastChange;
        this.permissionXML = permission.permissionXML;
    }
}
