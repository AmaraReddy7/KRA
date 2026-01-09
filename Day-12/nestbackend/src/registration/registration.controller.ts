import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';

import { CreateRegistrationDto, UpdateRegistrationDto } from './dto';
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
  findAll(@Req() req) {
    console.log(req.user); // { userId, email, role }
    return this.registrationService.findAll();
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleteuser = this.registrationService.remove(+id);
    return deleteuser;
  }
}
