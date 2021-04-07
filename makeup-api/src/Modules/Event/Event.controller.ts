import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards, UsePipes } from "@nestjs/common";
import { Paths } from "src/Const/paths";
import { Role } from "src/Const/roles";
import { OnlyForRoles } from "src/Decorators/OnlyForRoles";
import { JwtAuthGuard } from "src/Guards/JwtAuthGuard";
import { RolesGuard } from "src/Guards/RoleGuard";
import { IEventCreateBody } from "src/Modules/Event/Event.dto";
import { mockEvent } from "src/Modules/Event/Event.mocks";
import { EventService } from "src/Modules/Event/Event.service";
import { IEvent, IEventList } from "src/Modules/Event/Event.type";
import { EventCreateBodyValidation } from "src/Modules/Event/Event.validations";
import { JoiValidationPipe } from "src/Pipes/JoiValidationPipe";

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
