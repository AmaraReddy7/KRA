import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginRegistrationDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6)
  password: string;
}
