import { Module } from '@nestjs/common';
import { EventModule } from 'src/Modules/Event.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
