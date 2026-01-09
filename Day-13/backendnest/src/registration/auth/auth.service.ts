import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegistrationService } from '../registration.service';
import { LoginRegistrationDto } from '../dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly registrationService: RegistrationService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginRegistrationDto) {
    const user = await this.registrationService.findByEmail(dto.email);
    console.log(dto);
    console.log(typeof dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isValid = await bcrypt.compare(dto.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
