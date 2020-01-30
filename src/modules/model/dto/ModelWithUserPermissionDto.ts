
import { ApiModelPropertyOptional } from '@nestjs/swagger';

import { ModelEntity } from '../model.entity';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleType } from '../../../constants/role-type';
import { RoleEntity } from '../../role/role.entity';

export class ModelWithUserPermissionDto extends AbstractDto {
    @ApiModelPropertyOptional()
    modelName: string;

    @ApiModelPropertyOptional()
    modelXML: string;

    @ApiModelPropertyOptional()
    id: string;

    @ApiModelPropertyOptional()
    public modelVersion: number;

    @ApiModelPropertyOptional()
    public canRead: boolean;

    @ApiModelPropertyOptional()
    public canWrite: boolean;

    constructor(model: ModelEntity, role: RoleEntity) {
        super(model);
        this.modelName = model.modelName;
        this.id = model.id;
        this.modelVersion = model.modelVersion;
        this.modelXML = model.modelXML;
        this.canRead = role.canRead;
        this.canWrite = role.canWrite;

    }
}
