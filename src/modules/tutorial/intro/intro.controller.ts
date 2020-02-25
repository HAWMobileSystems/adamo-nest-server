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
import { IntroService } from './intro.service';

@Controller('intro')
@ApiUseTags('intro')
@ApiBearerAuth()
export class IntroController {
    constructor(private readonly introService: IntroService) {}
   
    /**
     * Returns the "Overview for the User"
     * @param user_id with the choosen Language
     * @param lang
     */
    @Get('startview/:id/:lang')
    listAllQsByCatAndUser(@Param('id') id,@Param('lang') lang): Promise<any> {
        return this.introService.getAllQsByCatAndUser(id,lang);
    }

    /**
     * Returns the Requested Page of the Level
     * @param lvl with the ID(Page NUmber)
     * @param id with the choosen Language
     * @param lang
     */
    @Get('/:lvl/:pageid/:lang')
    listLvl(@Param('lvl') lvl,@Param('pageid') id,@Param('lang') lang){
        return this.introService.getPage(lvl,id,lang);
    }
}