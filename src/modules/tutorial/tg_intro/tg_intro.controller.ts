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
    
    @Put(':user_id/:cat_name')
    putUserTutorialFinished(@Param('user_id')user_id,@Param('cat_name') cat_name){
        console.log("putUserTutorial")
        return this.tg_introService.putUserTutorialFinished(user_id,cat_name,true)
    }
        
    @Put('')
    putUserTutorialFinishedAlternative(@Body() data:any){
        //,@Body('catName') catName:any,@Body('tg_intro_is_finished') tg_intro_is_finished:any){
        //console.log("Tutorial-Alternative")
        //console.log(data)
        let user_id  = data.userid
        let cat_name = data.catName
        let finished = true
        //console.log(data)
        return this.tg_introService.putUserTutorialFinished(user_id,cat_name,finished)
    }
}