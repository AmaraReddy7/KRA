import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { BeforeInsert } from 'typeorm/browser';
import * as bcrypt from 'bcrypt';

export enum Role {
  Patient = 'patient',
  Doctor = 'doctor',
  Receiptonist = 'receptionist',
}

@Entity()
export class Registration {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @Column(Unique)
  email: string;
  @Column() // {select : false}
  password: string;

  @Column({ type: 'enum', enum: Role }) // default: Role.Patient
  role: Role;
}
