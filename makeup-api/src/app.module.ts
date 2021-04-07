import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE_CONNECTION } from "src/Config/database";
import { EventModule } from "src/Modules/Event/Event.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./Modules/Auth/auth.module";
import { UsersModule } from "./Modules/Users/users.module";

@Module({
  imports: [
    EventModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities: [],
      synchronize: true, // set to false on production env
      host: DATABASE_CONNECTION.host,
      port: DATABASE_CONNECTION.port,
      username: DATABASE_CONNECTION.username,
      password: DATABASE_CONNECTION.password,
      database: DATABASE_CONNECTION.database,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AuthModule],
})
export class AppModule {}
