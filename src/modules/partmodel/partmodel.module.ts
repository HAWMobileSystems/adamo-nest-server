import { Module } from '@nestjs/common';
import { PartModelController } from './partmodel.controller';
import { PartModelService } from './partmodel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelRepository } from '../model/model.repository';

@Module({
    imports: [
    //     // forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([ModelRepository]),
    ],
    exports: [PartModelService],
    providers: [
        PartModelService,
    ],
    controllers: [PartModelController],
})
export class ModelModule {}
