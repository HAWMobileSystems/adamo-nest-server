import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryService } from '../category/category.service';
import { CategoryController } from '../category/category.controller';
import { CategoryRepository } from '../category/category.repository';
import { AuthModule } from '../../auth/auth.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([CategoryRepository]),
    ],
    controllers: [CategoryController],
    exports: [CategoryService],
    providers: [
        CategoryService,
    ],
})
export class CategoryModule {}
