import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  createUser(@Body() body: UserDto) {
    return this.userService.create(body);
  }
}
