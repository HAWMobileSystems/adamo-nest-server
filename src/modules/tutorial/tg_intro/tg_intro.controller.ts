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

import { Tg_IntroService } from './tg_intro.service';
import { Tg_IntroEntity } from './tg_intro.entity';

@Controller('tg_intro')
@ApiUseTags('tg_intro')
@ApiBearerAuth()
export class Tg_IntroController {_
    constructor(private readonly tg_introService: Tg_IntroService) {}
    /**
     * 
     
    @Get()
    listRoles() {
        return this.tg_introService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     
    @Put(':id/update')
    async update(@Param('id') id, @Body() testData: Tg_IntroEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        testData.id = id;
        console.log('Update #' + testData.id)

        return this.tg_introService.update(testData);
    }  

    /**
     * 
     * @param entity 
     
    @Post()
    create(@Body() entity: Tg_IntroEntity) {
        this.tg_introService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.tg_introService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
*/
}