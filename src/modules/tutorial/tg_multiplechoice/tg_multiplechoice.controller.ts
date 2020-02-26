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
    
    @Post('solve/')
    solveMultipleChoice(@Body() data:any){
        console.log(data)
        // console.log(data.user_choice)
        let user_id 
        let qs_id
        let answers: Map<string,string> = new Map<string,string>()
        data.user_choice.forEach(element => {
            if(element.key == 'userid'){
                user_id = element.value
            }else if(element.key == 'questionid'){
                qs_id = element.value
            }else {
                answers.set(element.key,element.value)
            }
        });
        return this.tg_multiplechoiceService.solveMultiplechoice(user_id,qs_id,answers)
    }
}