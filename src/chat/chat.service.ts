import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatDto } from './dto/chat.dto';
import { Chat } from './schema/chat.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
  ) {}
  
  async createMessage(dto: ChatDto): Promise<Chat> {
    let chat = new Chat();
    chat.id = uuidv4();
    chat.email = dto.email;
    chat.text = dto.text;
    chat.createdAt = new Date();
    return await this.chatRepository.save(chat);
  }

  async findAll(): Promise<Chat[]> {
    return await this.chatRepository.find();
  }
}