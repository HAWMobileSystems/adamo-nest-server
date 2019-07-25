'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';

import { RoleEntity } from '../role.entity';
import { AbstractDto } from '../../../common/dto/AbstractDto';
// import { RoleType } from '../../../constants/role-type';
// import { resolve } from 'path';

export class RoleDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public id: string;

    @ApiModelPropertyOptional()
    public roleName: string;

    @ApiModelPropertyOptional()
    public canRead: boolean;

    @ApiModelPropertyOptional()
    public canWrite: boolean;

    @ApiModelPropertyOptional()
    public isAdmin: boolean;

    constructor(role: RoleEntity) {
        super(role);
        this.id = role.id;
        this.roleName = role.roleName;
        this.canRead = role.canRead;
        this.canWrite = role.canWrite;
        this.isAdmin = role.isAdmin;
        // this.modelName = model.modelName;
        // this.id = model.id;
        // this.modelVersion = model.modelVersion;
        // this.timestampLastChange= model.timestampLastChange;
        // this.modelXML = model.modelXML;
    }
}
