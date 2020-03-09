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
import { Multiplechoice_QuestionService } from './multiplechoice_question.service';

@Controller('multiplechoice_question')
@ApiUseTags('multiplechoice_question')
@ApiBearerAuth()
export class Multiplechoice_QuestionController {
    constructor(private readonly multiplechoice_questionService: Multiplechoice_QuestionService) {}
}