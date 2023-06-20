import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CoreService } from '../core/core.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly coreService: CoreService,
  ) {}

  @Get()
  getHello(): string {
    return this.userService.getUser();
  }

  @Get('all')
  getAllHello(): string {
    return this.userService.getAllUser();
  }

  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
