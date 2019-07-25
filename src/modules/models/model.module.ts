import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelRepository } from 'modules/model/model.repository';

@Module({
    imports: [
    //     // forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([ModelRepository]),
    ],
    exports: [ModelService],
    providers: [
        ModelService,
    ],
    controllers: [ModelController],
})
export class ModelModule {}
