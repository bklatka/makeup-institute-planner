import { Module } from "@nestjs/common";
import { UsersController } from "src/Modules/Users/users.controller";
import { UsersService } from "src/Modules/Users/users.service";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
