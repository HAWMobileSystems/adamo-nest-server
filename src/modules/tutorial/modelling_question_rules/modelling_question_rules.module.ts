import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Modelling_Question_RulesService } from './modelling_question_rules.service';
import { Modelling_Question_RulesController } from './modelling_question_rules.controller';
import { Modelling_Question_RulesRepository } from './modelling_question_rules.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Modelling_Question_RulesRepository]),
    ],
    controllers: [Modelling_Question_RulesController],
    exports: [Modelling_Question_RulesService],
    providers: [
        Modelling_Question_RulesService,
    ],
})
export class Modelling_Question_RulesModule {}
