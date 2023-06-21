import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CoreService } from '../core/core.service';
import { LoggingInterceptor } from '../interception';
import { AuthGuard } from '../guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly coreService: CoreService,
    @Inject('mockdata') private readonly mockData: { data: string },
  ) {}

  @Get()
  getHello(): string {
    return this.userService.getUser();
  }

  @Get('all')
  getAllHello(): string {
    return this.userService.getAllUser();
  }

  @Get('mock')
  getMock(): string {
    return this.mockData.data;
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  @Get('core')
  getCore(): string {
    return this.coreService.getCore();
  }
}
