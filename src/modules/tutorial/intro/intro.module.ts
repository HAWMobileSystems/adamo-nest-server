import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntroService } from './intro.service';
import { IntroController } from './intro.controller';
import { IntroRepository } from './intro.repository';
import { AuthModule } from '../../auth/auth.module';
import {CategoryModule} from '../category/category.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => CategoryModule),
        //forwardRef(() => IntroModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([IntroRepository]),
    ],
    controllers: [IntroController],
    exports: [IntroService],
    providers: [
        IntroService,
    ],
})
export class IntroModule {}
