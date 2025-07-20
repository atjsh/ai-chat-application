import { Module } from '@nestjs/common';

import { ChatSessionModule } from '../core/chat-session/chat-session.module';

import { AIChatGateway } from './connectors/ai-chat.gateway';

@Module({
  imports: [ChatSessionModule],
  providers: [AIChatGateway],
})
export class AIChatModule {}
