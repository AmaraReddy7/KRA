import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  ValidationPipe,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { PatientService } from './app.service';
import { createPatientRequestDTO, updatePatientRequestDTO } from './dto';
import { HttpExceptionFilter } from './exceptionfilter/exceptionfilter';

@Controller('hospital')
@UseFilters(new HttpExceptionFilter())
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly patientService: PatientService) {}

  /*@Get()
  getHello(): string {
    return this.patientService.getHello();
  }*/
  @Get() // /patient
  async allPatients() {
    try {
      const patients = this.patientService.allPatients();
      return patients;
    } catch (error) {
      console.error('Got a error fetching patients', error);
    }
  }

  @Get(':id') // /patient/id
  async findPatient(@Param('id', ParseIntPipe) id: number) {
    try {
      const patient = this.patientService.findPatient(id);
      return patient;
    } catch (error) {
      console.error('Error in findPatient:', error);
    }
  }
  @Post() // /patient
  async create(
    @Body() /*person: {
      name: string;
      role: 'Doctor' | 'Patient' | 'Receptionist';
    },*/
    createpatientdto: createPatientRequestDTO,
  ) {
    try {
      const newperson = this.patientService.create(createpatientdto);
      return newperson;
    } catch (error) {
      console.error('Error in createnewperson:', error);
    }
    throw new ForbiddenException();
  }
  @Patch(':id') //patient/id
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() /* personupdate:  {
      name?: string;
      role: 'Doctor' | 'Patient' | 'Receptionist';
    },*/
    updatepatientdto: updatePatientRequestDTO,
  ) {
    try {
      const userupdate = this.patientService.update(id, updatepatientdto);
      return userupdate;
    } catch (error) {
      console.error('Error in updateperson:', error);
    }
    throw new ForbiddenException();
  }

  @Delete(':id') //patient/id
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      const deleteuser = this.patientService.delete(id);
      return deleteuser;
    } catch (error) {
      console.error('Error in updateperson:', error);
    }
    throw new ForbiddenException();
  }
}
