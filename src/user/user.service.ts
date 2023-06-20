import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Hello User!';
  }
  getAllUser(): string {
    return '<div style="color: red">Hello all User!</div>';
  }
}
