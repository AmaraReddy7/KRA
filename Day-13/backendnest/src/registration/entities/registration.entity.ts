import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  Patient = 'patient',
  Doctor = 'doctor',
  Receptionist = 'receptionist',
}

@Entity()
export class Registration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Patient,
  })
  role: Role;
}
