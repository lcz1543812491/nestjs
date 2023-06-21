import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CoreModule } from '../core';

// type ProviderDemoType = { data: string };

@Module({
  imports: [CoreModule],
  controllers: [UserController],
  providers: [
    UserService,
    { useValue: { data: 'mock data' }, provide: 'mockdata' },
  ],
})
export class UserModule {}
