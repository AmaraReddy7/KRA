import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginRegistrationDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginRegistrationDto) {
    return this.authService.login(dto);
  }
}
