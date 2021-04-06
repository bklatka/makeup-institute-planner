import { Module } from '@nestjs/common';
import { EventController } from 'src/Controllers/Event.controller';
import { EventService } from 'src/Services/Event.service';

@Module({
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
