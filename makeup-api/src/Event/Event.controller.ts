import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  SetMetadata,
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
import { RolesGuard } from 'src/Guards/RoleGuard';
import { JoiValidationPipe } from 'src/Pipes/JoiValidationPipe';
import { EventService } from 'src/Event/Event.service';
import { EventCreateBodyValidation } from 'src/Event/Event.validations';

@Controller(Paths.events)
@UseGuards(JwtAuthGuard, RolesGuard)
export class EventController {
  private readonly logger = new Logger(EventController.name);

  constructor(private eventService: EventService) {}

  @Get()
  findAll(): IEventList[] {
    return this.eventService.findAll();
  }

  @Post()
  @OnlyForRoles(Role.ADMIN)
  @UsePipes(new JoiValidationPipe(EventCreateBodyValidation))
  create(@Body() body: IEventCreateBody): IEvent {
    this.logger.log('Creating event');
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
