import { AbstractEntity } from '../../common/abstract.entity';
import { RoleDto } from './dto/RoleDto';
// import { RoleType } from '../../constants/role-type';
// import { PasswordTransformer } from './password.transformer';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name: 'roles' })
export class RoleEntity extends AbstractEntity<RoleDto> {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @ApiModelProperty()
    @Column({ nullable: false })
    public roleName: string;

    @ApiModelProperty()
    @Column()
    public canRead: boolean;

    @ApiModelProperty()
    @Column({ nullable: false })
    public canWrite: boolean;

    @ApiModelProperty()
    @Column({ nullable: false })
    public isAdmin: boolean;

    public toString(): string {
        return `${this.roleName}`;
    }

    dtoClass = RoleDto;
}
