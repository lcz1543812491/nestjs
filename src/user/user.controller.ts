import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CoreService } from '../core/core.service';
import { LoggingInterceptor } from '../interception';
import { AuthGuard } from '../guard';

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

  @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
