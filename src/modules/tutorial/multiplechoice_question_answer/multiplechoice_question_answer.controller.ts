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
import { Multiplechoice_Question_AnswerService } from './multiplechoice_question_answer.service';

@Controller('multiplechoice_question_answer')
@ApiUseTags('multiplechoice_question_answer')
@ApiBearerAuth()
export class Multiplechoice_Question_AnswerController {
    constructor(private readonly multiplechoice_question_answerService: Multiplechoice_Question_AnswerService) {}
    
}