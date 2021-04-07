import { Role } from 'src/Const/roles';

export interface IUser {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
}
