import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegistrationModule } from '../registration.module';
import { AuthGuard } from './auth.guard';
import { TransformInterceptor } from './auth.transforminterceptor';
import { ErrorInterceptor } from './auth.errorsinterceptors';
import { LoggingInterceptor } from './auth.logginginterceptor';
import { CacheInterceptor } from './auth.cacheinterceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    RegistrationModule,
    JwtModule.register({
      global: true,
      secret: 'JWT_SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [AuthGuard],
})
export class AuthModule {}
