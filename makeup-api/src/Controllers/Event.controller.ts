import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { mockEvent, mockEventList } from "src/mocks/Event.mocks";
import { IEventCreateBody } from "src/Models/Event/Event.dto";
import { IEvent, IEventList } from "src/Models/Event/Event.model";


@Controller('events')
export class EventController {

  @Get()
  findAll(): IEventList[] {
    return [mockEventList];
  }

  @Post()
  create(@Body() body: IEventCreateBody): IEvent {
    return mockEvent;
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
