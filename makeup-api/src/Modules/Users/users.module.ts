import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "src/Modules/Users/users.controller";
import { UserEntity } from "src/Modules/Users/users.entity";
import { UsersService } from "src/Modules/Users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
