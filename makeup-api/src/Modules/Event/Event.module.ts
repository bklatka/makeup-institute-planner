import { Module } from "@nestjs/common";
import { EventController } from "src/Modules/Event/Event.controller";
import { EventService } from "src/Modules/Event/Event.service";

@Module({
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
