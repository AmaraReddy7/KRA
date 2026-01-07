import { createPatientRequestDTO } from './create-patient.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class updatePatientRequestDTO extends PartialType(
  createPatientRequestDTO,
) {
  /* @IsString()
  @IsNotEmpty()
  name?: string;
  @IsEnum(['Doctor', 'Patient', 'Receptionist'], {
    message: 'valid role required',
  })

  role: 'Doctor' | 'Patient' | 'Receptionist';*/
}
