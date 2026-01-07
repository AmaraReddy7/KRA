import { Injectable } from '@nestjs/common';

import { NotFoundException } from '@nestjs/common';
import { createPatientRequestDTO, updatePatientRequestDTO } from './dto';

@Injectable()
export class PatientService {
  getHello(): string {
    return 'Hello World!';
  }
  private persons = [
    {
      id: 1,
      name: 'Aman',
      role: 'Patient',
    },
    {
      id: 2,
      name: 'srujan',
      role: 'Doctor',
    },
    {
      id: 3,
      name: 'srian',
      role: 'Receptionist',
    },
  ];

  allPatients() {
    return this.persons;
  }

  findPatient(id: number) {
    const person = this.persons.find((person) => person.id === id);
    if (!person) throw new NotFoundException('User Not Found');
    return person;
  }

  create(
    /*person: {
    name: string;
    role: 'Doctor' | 'Patient' | 'Receptionist';

  }*/ createpatientdto: createPatientRequestDTO,
  ) {
    const personByHighestId = [...this.persons].sort((a, b) => b.id - a.id);
    const newperson = {
      id: personByHighestId[0].id + 1,
      ...createpatientdto,
    };
    this.persons.push(newperson);
    return newperson;
  }
  update(
    id: number,
    /*personupdate: {
      name?: string;
      role: 'Doctor' | 'Patient' | 'Receptionist';
    },*/
    updatepatientdto: updatePatientRequestDTO,
  ) {
    this.persons = this.persons.map((person) => {
      if (person.id === id) {
        return { ...person, ...updatepatientdto };
      }
      return person;
    });
    return this.findPatient(id);
  }
  delete(id: number) {
    const removedperson = this.findPatient(id);
    this.persons = this.persons.filter((person) => person.id !== id);

    return removedperson;
  }
}
