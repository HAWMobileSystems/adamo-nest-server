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

import { TestService } from './test.service';
import { TestEntity } from './test.entity';

@Controller('test')
@ApiUseTags('test')
@ApiBearerAuth()
export class TestController {_
    constructor(private readonly testService: TestService) {}
    /**
     * 
     */
    @Get()
    listRoles() {
        return this.testService.find();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() testData: TestEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        testData.id = id;
        console.log('Update #' + testData.id)

        return this.testService.update(testData);
    }  

    /**
     * 
     * @param entity 
     */
    @Post()
    create(@Body() entity: TestEntity) {
        this.testService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.testService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  

}