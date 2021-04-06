export interface IEvent {
  id: string;
  title: string;
  description: string;
  dateFrom: Date;
  dateTo: Date;
  numOfArtists: number;
  numOfArtistsPerModel: number;
}

export interface IEventList {
  id: string;
  title: string;
  dateFrom: Date;
  dateTo: Date;
  numOfArtists: number;
}
