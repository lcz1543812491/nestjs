import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getUser();
  }

  @Get('all')
  getAllHello(): string {
    return this.userService.getAllUser();
  }
}
