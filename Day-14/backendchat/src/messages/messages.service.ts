import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}
  /*messages: Message[] = [
    { name: 'marcus', text: 'hello' },
    { name: 'marvo', text: 'welcome' },
  ];*/

  clientToUser = {};
  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }
  /* async create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    // return this.messages.push(CreateMessageDto);
    this.messages.push(message);
    return message;

    const newUser = new Message();
    newUser.name = CreateMessageDto.name;
    newUser.text = CreateMessageDto.text;

    return await this.messageRepository.save(newUser);
  }*/
  async create(createMessageDto: CreateMessageDto) {
    const newMessage = new Message();
    newMessage.name = createMessageDto.name;
    newMessage.text = createMessageDto.text;

    return await this.messageRepository.save(newMessage);
  }

  findAll() {
    return this.messageRepository.find();
  }
  joinroom() {
    return '';
  }
}
