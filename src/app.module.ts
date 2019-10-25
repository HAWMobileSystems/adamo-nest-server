import './boilerplate.polyfill';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { ConfigService } from './shared/services/config.service';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';
import { ModelModule } from './modules/model/model.module';
import { UserModule } from './modules/user/user.module';
import { IntroModule } from './modules/tutorial/intro/intro.module';
import { CategoryModule } from './modules/tutorial/category/category.module';
import { contextMiddleware } from './middlewares';
import { MathModule } from './modules/math/math.module';
import { SharedModule } from './shared.module';

@Module({
    imports: [
        AuthModule,
        UserModule,
        MathModule,
        PermissionModule, 
        ModelModule, 
        RoleModule, 
        IntroModule,
        CategoryModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) => configService.typeOrmConfig,
            inject: [ConfigService],
        }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
