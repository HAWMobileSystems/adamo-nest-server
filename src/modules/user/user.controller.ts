'use strict';

import { Get, HttpCode, HttpStatus, Controller, UseGuards, UseInterceptors, Post, Body, Param, Put, Delete , Logger} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

import { Roles } from '../../decorators/roles.decorator';
import { RoleType } from '../../constants/role-type';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { async } from 'rxjs/internal/scheduler/async';
@Controller('user')
@ApiUseTags('user')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(AuthUserInterceptor)
// @ApiBearerAuth()
export class UserController {

    constructor(private readonly userService: UserService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    async list() {
        this.userService.list();
    }

    // @Get()
    // @HttpCode(HttpStatus.OK)
    // async


    @Post('create')
    async create(@Body() userData: any): Promise<any> {
        Logger.log(`user create ${userData}`)
        const createdUser = await this.userService.create(userData);
           
        // also generate permission
        const selectDistinctModelsFromModel= "";
        const insertIntoPermissionMidUidRid = "";
        const values = ["row.mid", createdUser.id, RoleType.User]
      return userData;


      /*
       db.query('' +
                    'SELECT DISTINCT(mid) as mid ' +
                    'FROM model')
                  .then(function (rows) {
                    rows.forEach(function (row) {
                      db.oneOrNone('' +
                        'INSERT INTO permission (mid, uid, rid)\n' +
                        'SELECT $1, $2, $3', [row.mid, _uid, 6, ])
                    });
                  })
      */
    }  

    /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: UserEntity): Promise<any> {
        // userData.id = Number(id);
        userData.id = id;
        console.log('Update #' + userData.id)
        return this.userService.update(userData);
    }  

    @Post()
    @HttpCode(HttpStatus.OK)
    async changePassword() {

    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        // also remove the permission .. maybe typeorm is good enough to remove it also
      return this.userService.delete(id);

        const deletedUser = this.userService.delete(id);
        deletedUser.then(data => data.raw)
        //  db.oneOrNone('delete from permission where uid = $1; delete from users where uid = $1', [uid])
       
    }  

    
    @Get('admin')
    @Roles(RoleType.User)
    @HttpCode(HttpStatus.OK)
    async admin(@AuthUser() user: UserEntity) {
        return 'only for you admin: ' + user.firstName;
    }

    // TODO create best PRACTICE for pagination https://github.com/bashleigh/nestjs-typeorm-paginate/blob/master/src/pagination.ts
}
