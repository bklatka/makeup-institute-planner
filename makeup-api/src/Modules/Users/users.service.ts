import { Injectable } from "@nestjs/common";
import { mockUsers } from "src/Modules/Users/users.mock";

@Injectable()
export class UsersService {
  async findById(id: string) {
    return mockUsers.find((user) => user.id === id);
  }

  async findOne(username: string) {
    return mockUsers.find((user) => user.username === username);
  }
}
