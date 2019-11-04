import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionRepository } from './permission.repository';
import { AuthModule } from '../auth/auth.module';
import { RoleModule } from '../role/role.module';
import { ModelModule } from '../model/model.module';

@Module({
    imports: [
        
        forwardRef(() => AuthModule),
        forwardRef(() => ModelModule),
        forwardRef(() => RoleModule),
        TypeOrmModule.forFeature([PermissionRepository]),
    ],
    controllers: [PermissionController],
    exports: [PermissionService],
    providers: [
        PermissionService,
    ],
})
export class PermissionModule {}
