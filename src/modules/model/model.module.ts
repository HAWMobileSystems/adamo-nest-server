import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModelService } from './model.service';
import { ModelController } from './model.controller';
import { AuthModule } from '../auth/auth.module';
import { ModelRepository } from './model.repository';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([ModelRepository]),
    ],
    controllers: [ModelController],
    exports: [ModelService],
    providers: [
        ModelService,
    ],
})
export class ModelModule {}
