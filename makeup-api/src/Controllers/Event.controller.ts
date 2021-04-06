import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { mockEvent, mockEventList } from "src/Mocks/Event.mocks";
import { IEventCreateBody } from "src/Models/Event/Event.dto";
import { IEvent, IEventList } from "src/Models/Event/Event.model";
import { EventService } from "src/Services/Event.service";


@Controller('events')
export class EventController {

  constructor(private eventService: EventService) {
  }

  @Get()
  findAll(): IEventList[] {
    return this.eventService.findAll();
  }

  @Post()
  create(@Body() body: IEventCreateBody): IEvent {
    return this.eventService.create(body);
  }

  @Put(':id')
  update(@Param() id: string, @Body() body: Partial<IEventCreateBody>): IEvent {
    return mockEvent;
  }

  @Delete(':id')
  remove(@Param() id: string): boolean {
    return true;
  }
}
