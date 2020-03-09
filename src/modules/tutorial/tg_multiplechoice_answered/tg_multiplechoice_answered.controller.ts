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
import { Tg_Multiplechoice_AnsweredService } from './tg_multiplechoice_answered.service';

@Controller('tg_multiplechoice_answered')
@ApiUseTags('tg_multiplechoice_answered')
@ApiBearerAuth()
export class Tg_Multiplechoice_AnsweredController {_
    constructor(private readonly tg_multiplechoice_answeredService: Tg_Multiplechoice_AnsweredService) {}
    
}