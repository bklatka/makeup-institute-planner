import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/Auth/auth.service';
import { Paths } from 'src/Const/paths';
import { LocalAuthGuard } from 'src/Guards/LocalAuthGuard';

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
}
