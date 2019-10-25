import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Modelling_QuestionService } from './modelling_question.service';
import { Modelling_QuestionController } from './modelling_question.controller';
import { Modelling_QuestionRepository } from './modelling_question.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Modelling_QuestionRepository]),
    ],
    controllers: [Modelling_QuestionController],
    exports: [Modelling_QuestionService],
    providers: [
        Modelling_QuestionService,
    ],
})
export class Modelling_QuestionModule {}
