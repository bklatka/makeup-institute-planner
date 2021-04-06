import { Module } from '@nestjs/common';
import { EventController } from 'src/Event/Event.controller';
import { EventService } from 'src/Event/Event.service';

@Module({
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
