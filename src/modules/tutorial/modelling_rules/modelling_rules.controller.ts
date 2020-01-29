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

import { Modelling_RulesService } from './modelling_rules.service';
import { Modelling_RulesEntity } from './modelling_rules.entity';

@Controller('modelling_rules')
@ApiUseTags('modelling_rules')
@ApiBearerAuth()
export class Modelling_RulesController {
    constructor(private readonly modelling_RulesService: Modelling_RulesService) {}
    /**
     * 
     
    @Get()
    listRoles() {
        return this.modelling_RulesService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     
    @Put(':id/update')
    async update(@Param('id') id, @Body() modelling_RulesData: Modelling_RulesEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        modelling_RulesData.id = id;
        console.log('Update #' + modelling_RulesData.id)
        return this.modelling_RulesService.update(modelling_RulesData);
    }  

    /**
     * 
     * @param entity 
     
    @Post()
    create(@Body() entity: Modelling_RulesEntity) {
        this.modelling_RulesService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.modelling_RulesService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
*/
}