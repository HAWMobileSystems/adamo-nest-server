import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

import { Tg_Multiplechoice_AnsweredController } from './tg_multiplechoice_answered.controller';
import { Tg_Multiplechoice_AnsweredRepository } from './tg_multiplechoice_answered.repository';
import { Tg_Multiplechoice_AnsweredService } from './tg_multiplechoice_answered.service';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Tg_Multiplechoice_AnsweredRepository]),
    ],
    controllers: [Tg_Multiplechoice_AnsweredController],
    exports: [Tg_Multiplechoice_AnsweredService],
    providers: [
        Tg_Multiplechoice_AnsweredService,
    ],
})
export class Tg_Multiplechoice_AnsweredModule {}
