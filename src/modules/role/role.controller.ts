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
    Delete,
    Param,
    Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

import { Roles } from '../../decorators/roles.decorator';
import { RoleType } from '../../constants/role-type';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
// import { UserEntity } from '../user/user.entity';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';

@Controller('roles')
@ApiUseTags('roles')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class RoleController {
    constructor(private readonly roleService: RoleService) {}
    /**
     * 
     */
    @Get()
    listRoles() {
        return this.roleService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() roleData: RoleEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        roleData.id = id;
        console.log('Update #' + roleData.id)
        return this.roleService.update(roleData);
    }  

    /**
     * 
     * @param entity 
     */
    @Post()
    create(@Body() entity: RoleEntity) {
        this.roleService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.roleService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  

}
