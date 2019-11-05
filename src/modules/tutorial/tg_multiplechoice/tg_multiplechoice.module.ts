import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

import { Tg_MultiplechoiceController } from './tg_multiplechoice.controller';
import { Tg_MultiplechoiceRepository } from './tg_multiplechoice.repository';
import { Tg_MultiplechoiceService } from './tg_multiplechoice.service';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Tg_MultiplechoiceRepository]),
    ],
    controllers: [Tg_MultiplechoiceController],
    exports: [Tg_MultiplechoiceService],
    providers: [
        Tg_MultiplechoiceService,
    ],
})
export class Tg_MultiplechoiceModule {}
