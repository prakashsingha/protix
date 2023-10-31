import { Controller, Get } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly statusService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.statusService.findAll();
  }
}
