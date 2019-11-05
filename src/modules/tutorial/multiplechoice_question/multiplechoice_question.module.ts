import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Multiplechoice_QuestionService } from './multiplechoice_question.service';
import { Multiplechoice_QuestionController } from './multiplechoice_question.controller';
import { Multiplechoice_QuestionRepository } from './multiplechoice_question.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Multiplechoice_QuestionRepository]),
    ],
    controllers: [Multiplechoice_QuestionController],
    exports: [Multiplechoice_QuestionService],
    providers: [
        Multiplechoice_QuestionService,
    ],
})
export class Multiplechoice_QuestionModule {}
