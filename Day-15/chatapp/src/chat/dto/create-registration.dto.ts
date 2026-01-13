import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateChatDto {
  @IsEmail()
  email: string;
  @IsString()
  text: string;
}
