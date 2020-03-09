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
       
    @Post('')
    putUserTutorialFinishedAlternative(@Body() data:any){
        let user_id  = data.userid
        let cat_name = data.catName
        let finished = true
        return this.tg_introService.putUserTutorialFinished(user_id,cat_name,finished)
    }
}