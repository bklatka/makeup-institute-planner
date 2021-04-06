import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Paths } from 'src/Const/paths';

@Controller()
export class UsersController {}
