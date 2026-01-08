import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRegistrationDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6)
  password: string;
}
