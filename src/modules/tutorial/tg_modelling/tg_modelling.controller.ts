'use strict';

import {
    Get,
    HttpCode,
    HttpStatus,
    Controller,
    Post,
    Body,
    Delete,
    Param,
    Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { Tg_ModellingEntity } from './tg_modelling.entity';
import { Tg_ModellingService } from './tg_modelling.service';

@Controller('tg_modelling')
@ApiUseTags('tg_modelling')
@ApiBearerAuth()
export class Tg_ModellingController {_
    constructor(private readonly tg_modellingService: Tg_ModellingService) {}
    /**
     * 
     */
    @Get()
    listRoles() {
        return this.tg_modellingService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() testData: Tg_ModellingEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        testData.id = id;
        console.log('Update #' + testData.id)

        return this.tg_modellingService.update(testData);
    }  

    /**
     * 
     * @param entity 
     */
    @Post()
    create(@Body() entity: Tg_ModellingEntity) {
        this.tg_modellingService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.tg_modellingService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  

}