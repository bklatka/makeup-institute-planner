import { Module } from '@nestjs/common';
import { EventModule } from 'src/Event/Event.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [EventModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
