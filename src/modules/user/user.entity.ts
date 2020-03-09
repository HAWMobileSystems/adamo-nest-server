import { Entity, Column, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UserDto } from './dto/UserDto';
import { RoleType } from '../../constants/role-type';
import { PasswordTransformer } from './password.transformer';
import { PermissionEntity } from '../permission/permission.entity';
// import { PermissionEntity } from '../permission/permission.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ unique: true, nullable: true })
    username: string;

    @Column({ type: 'enum', enum: RoleType, default: RoleType.User })
    role: RoleType;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ nullable: true, transformer: new PasswordTransformer() })
    password: string;

    @OneToMany(type => PermissionEntity, permission => permission.id)
    photos: PermissionEntity[];
    // @Column({ nullable: true })
    // avatar: string;

    // @Column({ nullable: true })
    // thumbnail: string;

    // @Column({ nullable: true })
    // companyEmail: string;

    // @Column({ nullable: true })
    // companyName: string;

    // @Column({ nullable: true })
    // phone: string;

    // @Column({ nullable: true })
    // industry: string;

    // @Column({ nullable: true })
    // address: string;

    // @Column({ nullable: true })
    // country: string;

    // @Column({ nullable: true })
    // state: string;

    // @Column({ nullable: true })
    // city: string;

    // @Column({ nullable: true })
    // zipCode: string;

    @Exclude()
    dtoClass = UserDto;
}
