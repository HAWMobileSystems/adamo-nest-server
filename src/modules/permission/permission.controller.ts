'use strict';

import { Get, HttpCode, HttpStatus, Controller, UseGuards, UseInterceptors, Post, Body, Delete, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

import { Roles } from '../../decorators/roles.decorator';
import { RoleType } from '../../constants/role-type';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { PermissionEntity } from './permission.entity';
import { PermissionService } from './permission.service';

@Controller('permission')
@ApiUseTags('permission')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class PermissionController {

    constructor(private readonly permissionService: PermissionService) {
    }
    @Get()
    listModels() {
        return this.permissionService.list();
    }

    @Get('/:user/:model')
    getPermissionByUserAndMode(user, model) {
        // this.permissionService.get

    }

    @Post()
    create(@Body() entity: PermissionEntity) {
        this.permissionService.create(entity)
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        this.permissionService.delete(id)
    }

    @Get(":id") 
    getModel(id){
        return this.permissionService.findPermissions(id)
    }

    // @Get('admin')
    // @Roles(RoleType.User)
    // @HttpCode(HttpStatus.OK)
    // async admin(@AuthUser() user: UserEntity) {
    //     return 'only for you admin: ' + user.firstName;
    // }

    // TODO create best PRACTICE for pagination https://github.com/bashleigh/nestjs-typeorm-paginate/blob/master/src/pagination.ts
}
