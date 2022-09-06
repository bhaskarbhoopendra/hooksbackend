import { Body, Controller, Get, Post } from '@nestjs/common';
import { async } from 'rxjs';
import { CreateUserDTO } from './createuser.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    return await this.userService.createUser(createUser);
  }

  @Get()
  async getUser() {
    return await this.userService.getUsers();
  }
}
