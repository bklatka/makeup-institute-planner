import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWT_CONSTANTS } from 'src/Auth/auth.constants';
import { JwtStrategy } from 'src/Auth/jwt.strategy';
import { LocalStrategy } from 'src/Auth/local.strategy';
import { UsersModule } from 'src/Users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_CONSTANTS.SECRET,
      signOptions: { expiresIn: JWT_CONSTANTS.EXPIRATION },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
