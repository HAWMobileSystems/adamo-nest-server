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
import { Modelling_QuestionService } from './modelling_question.service';


@Controller('modelling_question')
@ApiUseTags('modelling_question')
@ApiBearerAuth()
export class Modelling_QuestionController {
    constructor(private readonly modelling_QuestionService: Modelling_QuestionService) {}


    
}