import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string; //  UUID must be string

  @Column()
  email: string;

  @Column()
  text: string; //  not unique

  @CreateDateColumn()
  createdAt: Date;
}
