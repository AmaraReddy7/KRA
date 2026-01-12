import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
//import { Server } from 'http';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3002, {})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('New User Connected', client.id);
    client.broadcast.emit('user-joined', {
      message: `new user joined the chat : ${client.id}`,
    });
    /* this.server.emit('user-joined', {
      message: `new user joined the chat : ${client.id}`,
    });*/
  }
  handleDisconnect(client: Socket) {
    console.log('user Disconnected', client.id);
    this.server.emit('user-left', {
      message: `user left the chat : ${client.id}`,
    });
  }
  // @SubscribeMessage('newMessage')
  // handleNewMessage(client: Socket, message: any) {
  // console.log(message);
  // client.emit('reply', 'This is a reply');
  // this.server.emit('reply', 'Broadcasting...'); //broad
  @SubscribeMessage('newMessage')
  handleNewMessage(@MessageBody() message: string) {
    this.server.emit('message', message);
  }
}

/*function WebSocketGateway(p0: number): (target: typeof ChatGateway) => void | typeof ChatGateway {
    throw new Error("Function not implemented.");
}
*/
