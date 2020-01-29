import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';
import { Tg_ModellingService } from './tg_modelling.service';
import { Tg_ModellingRepository } from './tg_modelling.repository';
import { Tg_ModellingController } from './tg_modelling.controller';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Tg_ModellingRepository]),
    ],
    controllers: [Tg_ModellingController],
    exports: [Tg_ModellingService],
    providers: [
        Tg_ModellingService,
    ],
})
export class Tg_ModellingModule {}
