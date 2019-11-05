import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Multiplechoice_Question_AnswerService } from './multiplechoice_question_answer.service';
import { Multiplechoice_Question_AnswerController } from './multiplechoice_question_answer.controller';
import { Multiplechoice_Question_AnswerRepository } from './multiplechoice_question_answer.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Multiplechoice_Question_AnswerRepository]),
    ],
    controllers: [Multiplechoice_Question_AnswerController],
    exports: [Multiplechoice_Question_AnswerService],
    providers: [
        Multiplechoice_Question_AnswerService,
    ],
})
export class Multiplechoice_QuestionModule {}
