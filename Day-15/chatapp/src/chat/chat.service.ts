import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { CreateChatDto } from './dto/create-registration.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
  ) {}

  /*async createMessage(chat: Chat): Promise<Chat> {
    console.log(chat);
    return await this.chatRepository.save(chat);
  }*/
  async createMessage(createChatDto: CreateChatDto) {
    const newchatperson = new Chat();
    newchatperson.email = createChatDto.email;
    newchatperson.text = createChatDto.text;

    return await this.chatRepository.save(newchatperson);
  }

  async getMessages(): Promise<Chat[]> {
    return await this.chatRepository.find();
  }
}
