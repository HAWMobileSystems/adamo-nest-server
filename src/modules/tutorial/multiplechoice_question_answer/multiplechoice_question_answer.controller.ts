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


import { Multiplechoice_Question_AnswerEntity } from './multiplechoice_question_answer.entity';
import { Multiplechoice_Question_AnswerService } from './multiplechoice_question_answer.service';

@Controller('multiplechoice_question_answer')
@ApiUseTags('multiplechoice_question_answer')
@ApiBearerAuth()
export class Multiplechoice_Question_AnswerController {_
    constructor(private readonly multiplechoice_question_answerService: Multiplechoice_Question_AnswerService) {}
    /**
     * 
     */
    @Get()
    listRoles() {
        return this.multiplechoice_question_answerService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() multiplechoice_question_answerData: Multiplechoice_Question_AnswerEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        multiplechoice_question_answerData.id = id;
        console.log('Update #' + multiplechoice_question_answerData.id)
        return this.multiplechoice_question_answerService.update(multiplechoice_question_answerData);
    }  

    /**
     * 
     * @param entity 
     */
    @Post()
    create(@Body() entity: Multiplechoice_Question_AnswerEntity) {
        this.multiplechoice_question_answerService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.multiplechoice_question_answerService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  

}