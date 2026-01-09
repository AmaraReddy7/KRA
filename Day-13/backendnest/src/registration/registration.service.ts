import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Registration, Role } from './entities/registration.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateRegistrationDto } from './dto';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
  ) {}
  async create(
    createRegistrationDto: CreateRegistrationDto,
  ): Promise<Registration> {
    console.log(`auth aervice`);

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

  findByEmail(email: string): Promise<Registration | null> {
    const safeEmail = Array.isArray(email) ? email[0] : email;

    return this.registrationRepository.findOneBy({
      email: safeEmail,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
