import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/Modules/Users/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findById(id: string) {
    return this.userRepository.findOne(id);
  }

  async findByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
    });
  }
}
