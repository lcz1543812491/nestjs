import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getCore(): string {
    return '<div style="color: red">Hello all Core!</div>';
  }
}
