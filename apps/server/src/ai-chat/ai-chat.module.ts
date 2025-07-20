import { Module } from '@nestjs/common';
import { AIChatGateway } from './connectors/ai-chat.gateway';

@Module({
  providers: [AIChatGateway],
})
export class AIChatModule {}
