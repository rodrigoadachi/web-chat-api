import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatDto } from './dto/chat.dto';
import { Message } from './schema/Message.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Message) private chatRepository: Repository<Message>,
  ) {}
  
  async createMessage(dto: ChatDto): Promise<Message> {
    let chat = new Message();
    chat.id = uuidv4();
    chat.email = dto.email;
    chat.text = dto.text;
    chat.createdAt = new Date();
    return await this.chatRepository.save(chat);
  }

  async findAll(): Promise<Message[]> {
    return await this.chatRepository.find();
  }
}