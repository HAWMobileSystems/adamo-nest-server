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

@Controller('tg_multiplechoice')
@ApiUseTags('tg_multiplechoice')
@ApiBearerAuth()
export class Tg_MultiplechoiceController {_
    constructor(private readonly tg_multiplechoiceService: Tg_MultiplechoiceService) {}
    
    @Get('getMultiplechoice/:user_id/:cat/:lang')
    getMultiplechoiceQs(@Param('user_id')id,@Param('cat') cat,@Param('lang') lang){
        return this.tg_multiplechoiceService.getMultiplechoiceQs(id,cat,lang)
    }
    
    @Post('/solve/')
    solveMultipleChoice(@Body() data:any){
        console.log(data)
        let user_id
        let qs_id
        let answers
        return this.tg_multiplechoiceService.solveMultiplechoice(user_id,qs_id,answers)
    }
}