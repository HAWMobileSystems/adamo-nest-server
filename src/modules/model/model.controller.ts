'use strict';

import {
    Get,
    HttpCode,
    HttpStatus,
    Controller,
    UseGuards,
    UseInterceptors,
    Delete,
    Post,
    Param,
    Body,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiUseTags,
    ApiImplicitQuery,
    ApiResponse,
    ApiCreatedResponse,
    ApiOperation,
} from '@nestjs/swagger';

// import { Roles } from '../../decorators/roles.decorator';
// import { RoleType } from '../../constants/role-type';
// import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
// import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';
import { ModelEntity } from './model.entity';
import { Logger } from '@nestjs/common';
import { PermissionService } from 'modules/permission/permission.service';
import { UserService } from 'modules/user/user.service';
import { ModelDto } from 'modules/models/dto/ModelDto';

@Controller('model')
@ApiUseTags('model')
// @UseGuards(AuthGuard) // der hier breaked.. 
// @UseGuards(AuthGuard, RolesGuard)
@UseGuards(RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
// accessToken: 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhNThkODQ1LTRiOWEtNDhjOC1hYWNjLWY2NjA5NThjZTVlZSIsImlhdCI6MTU2Mzc4MTk0MX0.N95OcCZld476xNJS1ke9lxFgy3iQMt0feW-zgTn7OfI"

export class ModelController {
    constructor(
        private readonly modelService: ModelService,
        private readonly permissionService: PermissionService,
        private readonly userService: UserService,
    ) {}

    @Get('all')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully created.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 401, description: 'Unauthorized. Mostly because user is not logged in' })
    async listModels() {
        return await this.modelService.list();
    }

    // @Get()
    // async getModel(@))

    @Get('changes')
    async changedModels() {
        return await this.modelService.getChangedModels();
    }

    @Post('create')
    @ApiOperation({ title: 'Create cat' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: ModelDto,
    })
    // @ApiCreatedResponse({
    //     description: 'The record has been successfully created.',
    // })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() entity: any): Promise<any> {
        // console.log(JSON.stringify(entity)
        Logger.log('create entity' + JSON.stringify(entity));
        // create permissions for entity
        // this.permissionService.createPermission()

        return await this.modelService.create(entity).then(async data => {
            const allUsers = await this.userService.list();
            const currentModel = await this.modelService.findOneOrFail(data.id);
            for (let user of allUsers) {
                await this.permissionService.createPermissionForNewModel(
                    currentModel,
                    user,
                );
            }
            return data;
        });
    }

    // @Delete(":id")
    // delete(@Param("id") id: string) {
    //     this.modelService.delete(id)
    // }

    @Get(':id/:version')
    @ApiResponse({
        status: 200,
        description: 'The found model for given id and version',
        type: ModelDto,
      })
    // @ApiImplicitQuery({ name: 'role', enum: ['Admin', 'Moderator', 'User'] })
    async getModel(@Param('id') id: string, @Param('version') version: string) {
        return await this.modelService.findModelByIdAndVersion(id, +version);
    }

    // @Get(':id/')
    // @ApiResponse({
    //     status: 200,
    //     description: 'The found model for given id and the newest version',
    //     type: ModelDto,
    //   })
    // // @ApiImplicitQuery({ name: 'role', enum: ['Admin', 'Moderator', 'User'] })
    // async getModelbyID(@Param('id') id: string, @Param('version') version: string) {
    //     // we need seperate type for version!
    //     return await this.modelService.findModelById(id);
    // }

    // @Get('admin')
    // @Roles(RoleType.User)
    // @HttpCode(HttpStatus.OK)
    // async admin(@AuthUser() model: ModelEntity) {
    //     return 'only for you admin: ' + model;
    // }

    // TODO create best PRACTICE for pagination https://github.com/bashleigh/nestjs-typeorm-paginate/blob/master/src/pagination.ts
}
