import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Modelling_RulesService } from './modelling_rules.service';
import { Modelling_RulesController } from './modelling_rules.controller';
import { Modelling_RulesRepository } from './modelling_rules.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([Modelling_RulesRepository]),
    ],
    controllers: [Modelling_RulesController],
    exports: [Modelling_RulesService],
    providers: [
        Modelling_RulesService,
    ],
})
export class Modelling_RulesModule {}
