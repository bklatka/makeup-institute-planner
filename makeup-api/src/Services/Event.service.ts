import { Injectable } from '@nestjs/common';
import { IEventCreateBody } from 'src/Models/Event/Event.dto';
import { IEvent, IEventList } from 'src/Models/Event/Event.model';

const DEFAULT_ARTISTS_PER_MODEL = 1;

@Injectable()
export class EventService {
  private readonly events: IEvent[] = [];

  create(event: IEventCreateBody) {
    const newEvent: IEvent = {
      id: this.events.length.toString(),
      numOfArtistsPerModel: DEFAULT_ARTISTS_PER_MODEL,
      ...event,
    };
    this.events.push(newEvent);

    return newEvent;
  }

  findAll(): IEventList[] {
    return this.events.map(this.mapEventDetailsToList);
  }

  private mapEventDetailsToList(event: IEvent): IEventList {
    return {
      id: event.id,
      dateFrom: event.dateFrom,
      dateTo: event.dateTo,
      title: event.title,
      numOfArtists: event.numOfArtists,
    };
  }
}
