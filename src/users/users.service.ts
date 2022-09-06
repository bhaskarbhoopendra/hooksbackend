import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './createuser.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUser: CreateUserDTO) {
    const newUser = this.userRepository.create(createUser);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async getUsers() {
    return await this.userRepository.find();
  }
}
