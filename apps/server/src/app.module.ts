import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AIChatSessionModule } from './ai-chat-session/ai-chat-serssion.module';
import { AIChatModule } from './ai-chat/ai-chat.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), AIChatModule, AIChatSessionModule],
})
export class AppModule {}
