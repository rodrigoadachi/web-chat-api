import { Logger } from "@nestjs/common";
// import { OnGatewayConnection, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
// import { Server, Socket } from "socket.io";
import { ChatDto, PayloadDto } from "./chat/dto/chat.dto";
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { map } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { ChatService } from "./chat/chat.service";
import { Message } from "./chat/schema/Message.entity";

@WebSocketGateway({ cors: { origin: '*' }})
export class AppGateway {
  constructor(
    private readonly chatService: ChatService,
  ){}

  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('AppGateway');

  async handleConnection(client: Socket) {
    const msgs = await this.chatService.findAll()
    this.server.emit('previousMsg', msgs);
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('msgToServer')
  reatMsg(
    @MessageBody() payload: PayloadDto,
    @ConnectedSocket() client: Socket,
  ): void {
    const chat = new ChatDto()
    chat.name = payload.name
    chat.email = payload.email
    chat.text = payload.text

    this.chatService.createMessage(chat)
    this.server.emit('msgFromServer', payload, client.id);
  }

// export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayConnection {
  
  // @WebSocketServer() server: Server;
  
  // private logger: Logger = new Logger('AppGateway');
  // private message: Array<ChatDto> = []

  // @SubscribeMessage('msgToServer')
  // handleMessage(client: Socket, payload: PayloadDto): void {
  //   this.message.push({
  //     id: client.id,
  //     name: payload.name,
  //     email: payload.email,
  //     text: payload.text
  //   })
  //   this.server.emit('msgFromServer', payload, client.id);
  // }

  // afterInit(server: Server) {
  //   this.logger.log('Init');
  // }

  // handleConnection(client: Socket) {
  //   this.logger.log(`Client connected: ${client.id}`);
  //   this.server.emit('previousMsg', this.message);
  // }

}