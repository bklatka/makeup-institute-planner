import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Paths } from 'src/Const/paths';
import { Role } from 'src/Const/roles';
import { OnlyForRoles } from 'src/Decorators/OnlyForRoles';
import { mockEvent } from 'src/Event/Event.mocks';
import { IEventCreateBody } from 'src/Event/Event.dto';
import { IEvent, IEventList } from 'src/Event/Event.model';
import { JwtAuthGuard } from 'src/Guards/JwtAuthGuard';
import { JoiValidationPipe } from 'src/Pipes/JoiValidationPipe';
import { EventService } from 'src/Event/Event.service';
import { EventCreateBodyValidation } from 'src/Event/Event.validations';

@Controller(Paths.events)
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): IEventList[] {
    return this.eventService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @OnlyForRoles(Role.ADMIN)
  @UsePipes(new JoiValidationPipe(EventCreateBodyValidation))
  create(@Body() body: IEventCreateBody): IEvent {
    return this.eventService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @OnlyForRoles(Role.ADMIN)
  update(@Param() id: string, @Body() body: Partial<IEventCreateBody>): IEvent {
    return mockEvent;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @OnlyForRoles(Role.ADMIN)
  remove(@Param() id: string): boolean {
    return true;
  }
}
