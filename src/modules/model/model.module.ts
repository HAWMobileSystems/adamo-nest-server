import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModelService } from './model.service';
import { ModelController } from './model.controller';
import { AuthModule } from '../auth/auth.module';
import { ModelRepository } from './model.repository';
import { UserModule } from '../user/user.module';
import { PermissionModule } from '../permission/permission.module';
import { RoleModule } from '../role/role.module';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        forwardRef(() => UserModule),

        forwardRef(() => PermissionModule),
        
        TypeOrmModule.forFeature([ModelRepository]),
        
    ],
    controllers: [ModelController],
    exports: [ModelService],
    providers: [
        ModelService,
    ],
})
export class ModelModule {}
