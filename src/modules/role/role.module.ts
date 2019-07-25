import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { AuthModule } from '../auth/auth.module';
import { RoleRepository } from './role.repository';
import { PermissionModule } from 'modules/permission/permission.module';
import { ModelModule } from 'modules/model/model.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        // forwardRef(() => ModelModule),
        // forwardRef(() => PermissionModule),
        TypeOrmModule.forFeature([RoleRepository]),
    ],
    controllers: [RoleController],
    exports: [RoleService],
    providers: [
        RoleService,
    ],
})
export class RoleModule {}
