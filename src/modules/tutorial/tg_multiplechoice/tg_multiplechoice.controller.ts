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
import { Tg_MultiplechoiceService } from './tg_multiplechoice.service';
import { Tg_MultiplechoiceEntity } from './tg_multiplechoice.entity';

@Controller('tg_multiplechoice')
@ApiUseTags('tg_multiplechoice')
@ApiBearerAuth()
export class Tg_MultiplechoiceController {_
    constructor(private readonly tg_multiplechoiceService: Tg_MultiplechoiceService) {}
    /**
     * 
     */
    @Get()
    listRoles() {
        return this.tg_multiplechoiceService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() testData: Tg_MultiplechoiceEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        testData.id = id;
        console.log('Update #' + testData.id)

        return this.tg_multiplechoiceService.update(testData);
    }  

    /**
     * 
     * @param entity 
     */
    @Post()
    create(@Body() entity: Tg_MultiplechoiceEntity) {
        this.tg_multiplechoiceService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.tg_multiplechoiceService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  

}