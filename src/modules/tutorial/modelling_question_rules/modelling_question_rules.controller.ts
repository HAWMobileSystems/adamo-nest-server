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

import { Modelling_Question_RulesService } from './modelling_question_rules.service';
import { Modelling_Question_RulesEntity } from './modelling_question_rules.entity';

@Controller('modelling_question_rules')
@ApiUseTags('modelling_question_rules')
@ApiBearerAuth()
export class Modelling_Question_RulesController {
    constructor(private readonly modelling_Question_RulesService: Modelling_Question_RulesService) {}
    /**
     * 
     
    @Get()
    listRoles() {
        return this.modelling_Question_RulesService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     
    @Put(':id/update')
    async update(@Param('id') id, @Body() modelling_Question_RulesData: Modelling_Question_RulesEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        modelling_Question_RulesData.id = id;
        console.log('Update #' + modelling_Question_RulesData.id)
        return this.modelling_Question_RulesService.update(modelling_Question_RulesData);
    }  

    /**
     * 
     * @param entity 
     
    @Post()
    create(@Body() entity: Modelling_Question_RulesEntity) {
        this.modelling_Question_RulesService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.modelling_Question_RulesService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
*/
}