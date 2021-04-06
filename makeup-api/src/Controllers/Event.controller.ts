import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { Paths } from 'src/Const/paths';
import { Role } from 'src/Const/roles';
import { OnlyForRoles } from 'src/Decorators/OnlyForRoles';
import { mockEvent } from 'src/Mocks/Event.mocks';
import { IEventCreateBody } from 'src/Models/Event/Event.dto';
import { IEvent, IEventList } from 'src/Models/Event/Event.model';
import { JoiValidationPipe } from 'src/Pipes/JoiValidationPipe';
import { EventService } from 'src/Services/Event.service';
import { EventCreateBodyValidation } from 'src/Validations/Event.validations';

@Controller(Paths.events)
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  findAll(): IEventList[] {
    return this.eventService.findAll();
  }

  @Post()
  @OnlyForRoles(Role.ADMIN)
  @UsePipes(new JoiValidationPipe(EventCreateBodyValidation))
  create(@Body() body: IEventCreateBody): IEvent {
    return this.eventService.create(body);
  }

  @Put(':id')
  @OnlyForRoles(Role.ADMIN)
  update(@Param() id: string, @Body() body: Partial<IEventCreateBody>): IEvent {
    return mockEvent;
  }

  @Delete(':id')
  @OnlyForRoles(Role.ADMIN)
  remove(@Param() id: string): boolean {
    return true;
  }
}
