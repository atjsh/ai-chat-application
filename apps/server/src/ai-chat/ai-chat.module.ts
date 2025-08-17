import { Module } from '@nestjs/common';

import { ChatSessionModule } from '../core/chat-session/chat-session.module';
import { AIChatSessionModule } from '../ai-chat-session/ai-chat-serssion.module';

import { AIChatGateway } from './connectors/ai-chat.gateway';

@Module({
  imports: [ChatSessionModule, AIChatSessionModule],
  providers: [AIChatGateway],
})
export class AIChatModule {}
