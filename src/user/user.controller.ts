import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CoreService } from '../core/core.service';
import { LoggingInterceptor } from '../interception';

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

  @UseInterceptors(LoggingInterceptor)
  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
