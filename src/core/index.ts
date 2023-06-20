import { Module, Global } from '@nestjs/common';
import { CoreService } from './core.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
