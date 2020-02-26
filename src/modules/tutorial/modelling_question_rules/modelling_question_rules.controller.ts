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

import { Modelling_Question_RulesService } from './modelling_question_rules.service';

@Controller('modelling_question_rules')
@ApiUseTags('modelling_question_rules')
@ApiBearerAuth()
export class Modelling_Question_RulesController {
    constructor(private readonly modelling_Question_RulesService: Modelling_Question_RulesService) {}
   
}