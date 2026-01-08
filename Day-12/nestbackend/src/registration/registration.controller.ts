import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async create(@Body() createRegistrationDto: CreateRegistrationDto) {
    try {
      const newperson = await this.registrationService.create(
        createRegistrationDto,
      );
      return newperson;
    } catch (error) {
      console.error('error while fetching registrationdata:', error);
    }
  }

  @Get()
  async findAll() {
    try {
      const registrationalldata = this.registrationService.findAll();
      return registrationalldata;
    } catch (error) {
      console.error('error while fetching registrationdata:', error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const person = this.registrationService.findOne(+id);
      return person;
    } catch (error) {
      console.error('error while fetching registrationdata:', error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRegistrationDto: UpdateRegistrationDto,
  ) {
    try {
      const updateuser = this.registrationService.update(
        +id,
        updateRegistrationDto,
      );
      return updateuser;
    } catch (error) {
      console.error('error while fetching registrationdata:', error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleteuser = this.registrationService.remove(+id);
    return deleteuser;
  }
}
