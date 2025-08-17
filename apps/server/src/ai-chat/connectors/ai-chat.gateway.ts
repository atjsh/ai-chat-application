import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket as SocketIOClient } from 'socket.io';

import { AIChatSessionService } from '../../ai-chat-session/ai-chat-session.service';

@WebSocketGateway({ cors: { origin: '*', credentials: true } })
export class AIChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly aiChatSessionService: AIChatSessionService) {}

  handleConnection(client: SocketIOClient) {
    const token = client.handshake.auth.token;
    if (typeof token !== 'string') {
      client.disconnect();
      return;
    }
    const isValid = this.aiChatSessionService.verifyEphemeralAPIToken(token);
    if (!isValid) {
      client.disconnect();
    }
  }
}
