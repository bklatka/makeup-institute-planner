import { Role } from 'src/Const/roles';
import { IUser } from 'src/Users/users.model';

export const mockUsers: IUser[] = [
  {
    id: '1',
    username: 'admin',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jogn@doe.com',
    password: 'test1234',
    roles: [Role.ADMIN],
  },
  {
    id: '2',
    username: 'model',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jogn@doe.com',
    password: 'test1234',
    roles: [Role.MODEL],
  },
  {
    id: '3',
    username: 'artist',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jogn@doe.com',
    password: 'test1234',
    roles: [Role.ARTIST],
  },
];
