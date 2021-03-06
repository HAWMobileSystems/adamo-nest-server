'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';

import { PartModelEntity } from '../partmodel.entity';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleType } from '../../../constants/role-type';

export class PartModelDto extends AbstractDto {
    @ApiModelPropertyOptional()
    modelName: string;

    // @ApiModelPropertyOptional()
    // timestampLastChange: number;

    @ApiModelPropertyOptional()
    modelXML: string;

    @ApiModelPropertyOptional()
    id: string;

    @ApiModelPropertyOptional()
    public modelVersion: number;

    constructor(model: PartModelEntity) {
        super(model);
        this.modelName = model.modelName;
        this.id = model.id;
        this.modelVersion = model.modelVersion;
        // this.timestampLastChange= model.timestampLastChange;
        this.modelXML = model.modelXML;
    }
}
