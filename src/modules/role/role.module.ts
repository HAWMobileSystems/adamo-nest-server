import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { AuthModule } from '../auth/auth.module';
import { RoleRepository } from './role.repository';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([RoleRepository]),
    ],
    controllers: [RoleController],
    exports: [RoleService],
    providers: [
        RoleService,
    ],
})
export class RoleModule {}
