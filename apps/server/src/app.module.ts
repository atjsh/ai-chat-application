import { Module } from '@nestjs/common';

import { AIChatModule } from './ai-chat/ai-chat.module';

@Module({
  imports: [AIChatModule],
})
export class AppModule {}
