import { Module } from '@nestjs/common';

import { AIChatModule } from './ai-chat/ai-chat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), AIChatModule],
})
export class AppModule {}
