'use strict';

import {
    Get,
    Controller,
    Post,
    Body,
    Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
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
    @Post('solve/:lang')
    solveSpecificModellingQuestion(@Param('lang') lang, @Body() data:any){
        let answer:ReturnFromModQs = new ReturnFromModQs(data.xml,data.userid,data.qs_id,data.duration)
        return this.tg_modellingService.solveQuestion(answer.user_id,answer.qs_id,answer.xml,lang,answer.duration)
    }

    @Get('modellingQsWithRuleTest')
    getModQS(){
        return this.tg_modellingService.getModQS()
    }

}
class ReturnFromModQs{
    xml: string
    user_id: string
    qs_id: string
    duration: number
    constructor(xml_in,uid_in,qsid_in,dur){
        this.xml = xml_in;
        this.user_id = uid_in;
        this.duration = dur;
        this.qs_id = qsid_in;
    }
}