import { IEvent, IEventList } from 'src/Models/Event/Event.model';

export const mockEvent: IEvent = {
  id: '1',
  dateFrom: new Date(),
  dateTo: new Date(),
  title: 'test event',
  description: 'some test event description',
  numOfArtists: 5,
  numOfArtistsPerModel: 1,
};

export const mockEventList: IEventList = {
  id: '1',
  dateFrom: new Date(),
  dateTo: new Date(),
  title: 'test event',
  numOfArtists: 5,
};
