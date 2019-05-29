'use strict';

import {
    Get,
    HttpCode,
    HttpStatus,
    Controller,
    UseGuards,
    UseInterceptors,
    Post,
    Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

import { Roles } from '../../decorators/roles.decorator';
import { RoleType } from '../../constants/role-type';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { UserEntity } from '../user/user.entity';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';

@Controller('roles')
@ApiUseTags('roles')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class RoleController {
    constructor(private readonly roleService: RoleService) {}
    @Get()
    listRoles() {
        return this.roleService.list();
    }

    @Get('/:user/:model')
    getPermissionByUserAndMode(user, model) {
        // this.roleService.get;
    }

    @Post()
    create(@Body() entity: RoleEntity) {
        this.roleService.create(entity);
    }

    // @Delete(":id")
    // delete(@Param("id") id: string) {
    //     this.roleService.delete(id)
    // }
}
