import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JWT_CONSTANTS } from "src/Modules/Auth/auth.constants";
import { UsersService } from "src/Modules/Users/users.service";
import { IUser } from "src/Modules/Users/users.type";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONSTANTS.SECRET,
    });
  }

  // passport injects decoded access token as a param
  async validate(payload: { sub: string; username: string }) {
    const user: IUser = await this.usersService.findById(payload.sub);
    return user;
  }
}
