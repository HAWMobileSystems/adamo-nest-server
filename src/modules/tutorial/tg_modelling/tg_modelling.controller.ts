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
import { Tg_ModellingEntity } from './tg_modelling.entity';
import { Tg_ModellingService } from './tg_modelling.service';

@Controller('tg_modelling')
@ApiUseTags('tg_modelling')
@ApiBearerAuth()
export class Tg_ModellingController {_
    constructor(private readonly tg_modellingService: Tg_ModellingService) {}
    /**
     * GETs the Modelling_Qs_Entity with the ID:
     * @param qs_id and the Langauge:
     * @param lang 
     */
    @Get('question/:id/:lang')
    getSpecificModellingQuestion(@Param('id') id,@Param('lang') lang){
        return this.tg_modellingService.getSpecificQs(id,lang)
    }
    /**
     * PUTs the solved Question in the Database for the User:
     * @param user_id and the Question:
     * @param qs_id 
     */
    @Put(':user_id/solved/:qs_id')
    solveSpecificModellingQuestion(@Param('user_id') id,@Param('qs_id') qs_id){
        return this.tg_modellingService.solveQuestion(id,qs_id)
    }

    @Get('modellingQsWithRuleTest')
    getModQS(){
        return this.tg_modellingService.getModQS()
    }

}