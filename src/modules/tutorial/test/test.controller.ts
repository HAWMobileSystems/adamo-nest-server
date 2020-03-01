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

@Controller('test')
@ApiUseTags('test')
@ApiBearerAuth()
export class TestController {
    constructor(private readonly testService: TestService) {}

    // @Put(':id/:task/:solution')
    // async solveMultiplechoice(@Param('id') id,@Param('task') task,@Param('solution') solution){
    //     this.testService.solveMultiplechoice(id,task,solution);
    // }
    
    @Get('adminPanel/:class')
    async getStatistics(@Param('class') clas,@Param('count') count){
        this.testService.getStatistics(clas,count);
    }
}