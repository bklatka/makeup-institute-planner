import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { Paths } from "src/Const/paths";
import { JwtAuthGuard } from "src/Guards/JwtAuthGuard";
import { LocalAuthGuard } from "src/Guards/LocalAuthGuard";
import { AuthService } from "src/Modules/Auth/auth.service";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post(Paths.login)
  async login(@Request() req) {
    return {
      access_token: await this.authService.login(req.user),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(Paths.profileInfo)
  getProfile(@Request() req) {
    return req.user;
  }
}
