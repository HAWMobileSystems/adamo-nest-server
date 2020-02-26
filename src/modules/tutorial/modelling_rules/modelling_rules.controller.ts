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
import { Modelling_RulesService } from './modelling_rules.service';

@Controller('modelling_rules')
@ApiUseTags('modelling_rules')
@ApiBearerAuth()
export class Modelling_RulesController {
    constructor(private readonly modelling_RulesService: Modelling_RulesService) {}
}