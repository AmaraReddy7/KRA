import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
