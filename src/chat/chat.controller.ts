import { Controller, Render, Get, Res, Body, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatDto } from './dto/chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async Chat() {
    return this.chatService.findAll();
  }

  // @Post()
  // async Create(
  //   @Body() body: ChatDto,
  // ): Promise<ChatDto> {
  //   return this.chatService.createMessage(body);
  // }

}