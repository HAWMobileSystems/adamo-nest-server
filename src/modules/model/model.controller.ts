'use strict';

import { Get, HttpCode, HttpStatus, Controller, UseGuards, UseInterceptors, Delete, Post, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

import { Roles } from '../../decorators/roles.decorator';
import { RoleType } from '../../constants/role-type';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';

@Controller('models')
@ApiUseTags('models')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class ModelController {

    constructor(private readonly modelService: ModelService) {
    }
    @Get()
    listModels() {
        return this.modelService.list();
    }

    @Post()
    create(@Body() entity: ModelEntity) {
        this.modelService.create(entity)
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        this.modelService.delete(id)
    }

    @Get(":id") 
    getModel(id){
        return this.modelService.findModel(id)
    }

    @Get('admin')
    @Roles(RoleType.User)
    @HttpCode(HttpStatus.OK)
    async admin(@AuthUser() model: ModelEntity) {
        return 'only for you admin: ' + model;
    }

    // TODO create best PRACTICE for pagination https://github.com/bashleigh/nestjs-typeorm-paginate/blob/master/src/pagination.ts
}
