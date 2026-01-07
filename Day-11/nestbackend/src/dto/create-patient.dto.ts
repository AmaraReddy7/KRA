import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class createPatientRequestDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEnum(['Doctor', 'Patient', 'Receptionist'], {
    message: 'valid role required',
  })
  role: 'Doctor' | 'Patient' | 'Receptionist';
}
