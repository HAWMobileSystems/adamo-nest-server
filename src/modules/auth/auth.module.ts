import { PassportModule } from '@nestjs/passport';
import { Module, forwardRef } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule,
        // PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
         SessionSerializer
        // JwtStrategy,
    ],
    exports: [
        // PassportModule.register({ defaultStrategy: 'jwt' }),
        AuthService,
    ],
})
export class AuthModule { }
