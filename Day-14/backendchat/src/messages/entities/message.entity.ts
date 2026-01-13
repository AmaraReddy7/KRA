import { PrimaryGeneratedColumn } from "typeorm";

export class Message {
 @PrimaryGeneratedColumn('uuid')
  id: string;

  name: string;
  text: string;
}
