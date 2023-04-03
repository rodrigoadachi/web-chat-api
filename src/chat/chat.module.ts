import { Message } from './schema/Message.entity';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Message
    ])
  ],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [ChatService],
})

export class ChatModule { }
