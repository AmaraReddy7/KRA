import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatGateway } from './chat.gateway';
import { Chat } from './chat.entity';
//import { ChatController } from './chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  // providers: [ChatService],
  providers: [ChatGateway, ChatService],
  exports: [ChatService],
  //controllers: [ChatController],
})
export class ChatModule {}
