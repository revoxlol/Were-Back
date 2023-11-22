// src/auth/user.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    
    return this.authService.register(createUserDto);
  }

  @Get('test')
  getTest() {
    return 'This is a test endpoint in UserController';
  }
}
