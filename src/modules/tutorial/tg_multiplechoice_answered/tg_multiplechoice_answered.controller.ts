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
import { Tg_Multiplechoice_AnsweredService } from './tg_multiplechoice_answered.service';
import { Tg_Multiplechoice_AnsweredEntity } from './tg_multiplechoice_answered.entity';

@Controller('tg_multiplechoice_answered')
@ApiUseTags('tg_multiplechoice_answered')
@ApiBearerAuth()
export class Tg_Multiplechoice_AnsweredController {_
    constructor(private readonly tg_multiplechoice_answeredServce: Tg_Multiplechoice_AnsweredService) {}
    /**
     * 
     */
    @Get()
    listRoles() {
        return this.tg_multiplechoice_answeredServce.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() testData: Tg_Multiplechoice_AnsweredEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        testData.id = id;
        console.log('Update #' + testData.id)

        return this.tg_multiplechoice_answeredServce.update(testData);
    }  

    /**
     * 
     * @param entity 
     */
    @Post()
    create(@Body() entity: Tg_Multiplechoice_AnsweredEntity) {
        this.tg_multiplechoice_answeredServce.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.tg_multiplechoice_answeredServce.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  

}