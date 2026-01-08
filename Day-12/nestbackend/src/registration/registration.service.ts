import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Registration, Role } from './entities/registration.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
  ) {}
  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(
      createRegistrationDto.password,
      saltRounds,
    );

    const newRegistration = new Registration();

    const newRej = this.registrationRepository.create();

    newRegistration.email = createRegistrationDto.email;
    newRegistration.name = createRegistrationDto.name;
    newRegistration.password = hashedPassword;
    newRegistration.role = Role.Doctor;

    return await this.registrationRepository.save(newRegistration);
  }

  findAll(): Promise<Registration[]> {
    return this.registrationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
