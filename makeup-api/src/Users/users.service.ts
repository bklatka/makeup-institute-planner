import { Injectable } from '@nestjs/common';
import { mockUsers } from 'src/Users/users.mock';

@Injectable()
export class UsersService {
  async findOne(username: string) {
    return mockUsers.find((user) => user.username === username);
  }
}
