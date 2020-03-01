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
import { lawngreen } from 'color-name';

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
        console.log("Solve - tg_modelling")
        // console.log(data.user_choice)
        let user_id 
        let qs_id 
        let xml
        console.log(data) 
        let answer:ReturnFromModQs = new ReturnFromModQs(data.xml,data.userid,data.qs_id)
        // data.forEach(element => {
        //     if(element.key == 'userid'){
        //         user_id = element.value
        //     }else if(element.key == 'qs_id'){
        //         qs_id = element.value
        //     }else {
        //         xml = element.value
        //     }
        // });
        lang = 'de'
        let dur = 10000
        return this.tg_modellingService.solveQuestion(answer.user_id,answer.qs_id,answer.xml,lang,dur)
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
    constructor(xml_in,uid_in,qsid_in){
        this.xml = xml_in;
        this.user_id = uid_in;
        this.qs_id = qsid_in;
    }
}