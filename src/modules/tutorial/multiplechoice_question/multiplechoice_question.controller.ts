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


import { Multiplechoice_QuestionEntity } from './multiplechoice_question.entity';
import { Multiplechoice_QuestionService } from './multiplechoice_question.service';

@Controller('multiplechoice_question')
@ApiUseTags('multiplechoice_question')
@ApiBearerAuth()
export class Multiplechoice_QuestionController {
    constructor(private readonly multiplechoice_questionService: Multiplechoice_QuestionService) {}
    /**
     * 
     
    @Get()
    listRoles() {
        return this.multiplechoice_questionService.find();
    }*/
    @Get('randomByLeveL/beginner/:user')
    getRandomBeginner(@Param('user') user): Promise<any>{
        return this.multiplechoice_questionService.getRandomByLvl(user,'Beginner');
    }
    @Get('randomByLeveL/advanced/:user')
    getRandomAdvanced(@Param('user') user): Promise<any>{
        return this.multiplechoice_questionService.getRandomByLvl(user,'Advanced');
    }
    @Get('randomByLeveL/professional/:user')
    getRandomProfessional(@Param('user') user): Promise<any>{
        return this.multiplechoice_questionService.getRandomByLvl(user,'Professional');
    }
     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     
    @Put(':id/update')
    async update(@Param('id') id, @Body() multiplechoice_questionData: Multiplechoice_QuestionEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        multiplechoice_questionData.id = id;
        console.log('Update #' + multiplechoice_questionData.id)
        return this.multiplechoice_questionService.update(multiplechoice_questionData);
    }  

    /**
     * 
     * @param entity 
     
    @Post()
    create(@Body() entity: Multiplechoice_QuestionEntity) {
        this.multiplechoice_questionService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.multiplechoice_questionService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
    */
}