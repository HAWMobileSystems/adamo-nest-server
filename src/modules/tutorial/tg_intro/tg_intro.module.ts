import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tg_IntroService } from './tg_intro.service';
import { Tg_IntroController } from './tg_intro.controller';
import { Tg_IntroRepository } from './tg_intro.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Tg_IntroRepository]),
    ],
    controllers: [Tg_IntroController],
    exports: [Tg_IntroService],
    providers: [
        Tg_IntroService,
    ],
})
export class Tg_IntroModule {}
