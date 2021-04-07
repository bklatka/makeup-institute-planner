import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JWT_CONSTANTS } from "src/Modules/Auth/auth.constants";
import { AuthService } from "src/Modules/Auth/auth.service";
import { JwtStrategy } from "src/Modules/Auth/jwt.strategy";
import { LocalStrategy } from "src/Modules/Auth/local.strategy";
import { UsersModule } from "src/Modules/Users/users.module";

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
