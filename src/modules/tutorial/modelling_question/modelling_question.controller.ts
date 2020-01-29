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

import { Modelling_QuestionService } from './modelling_question.service';
import { Modelling_QuestionEntity } from './modelling_question.entity';

@Controller('modelling_question')
@ApiUseTags('modelling_question')
@ApiBearerAuth()
export class Modelling_QuestionController {
    constructor(private readonly modelling_QuestionService: Modelling_QuestionService) {}

    @Get('randomByLeveL/beginner/:user')
    getRandomBeginner(@Param('user') user): Promise<any>{
        return this.modelling_QuestionService.getRandomByLvl(user,'Beginner');
    }
    @Get('randomByLeveL/advanced/:user')
    getRandomAdvanced(@Param('user') user): Promise<any>{
        return this.modelling_QuestionService.getRandomByLvl(user,'Advanced');
    }
    @Get('randomByLeveL/professional/:user')
    getRandomProfessional(@Param('user') user): Promise<any>{
        return this.modelling_QuestionService.getRandomByLvl(user,'Professional');
    }
    /**
     * 
     
    @Get()
    listRoles() {
        return this.modelling_QuestionService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     
    @Put(':id/update')
    async update(@Param('id') id, @Body() modelling_QuestionData: Modelling_QuestionEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        modelling_QuestionData.id = id;
        console.log('Update #' + modelling_QuestionData.id)
        return this.modelling_QuestionService.update(modelling_QuestionData);
    }  

    /**
     * 
     * @param entity 
     
    @Post()
    create(@Body() entity: Modelling_QuestionEntity) {
        this.modelling_QuestionService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.modelling_QuestionService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
*/
}