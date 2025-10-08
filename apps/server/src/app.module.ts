import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AIChatSessionConfigFactory } from './config/ai-chat-session.config';
import { GoogleGenAILLMProviderConfigFactory } from './config/core/llm-provider/google-genai.config';
import { DeepFilterNetIntegrationsConfigFactory } from './config/integrations/deep-filter-net.config';

import { AIChatSessionModule } from './ai-chat-session/ai-chat-serssion.module';
import { AIChatModule } from './ai-chat/ai-chat.module';
import { DeepFilterNetModule } from './integrations/deep-filter-net/deep-filter-net.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [DeepFilterNetIntegrationsConfigFactory, AIChatSessionConfigFactory, GoogleGenAILLMProviderConfigFactory],
    }),
    AIChatModule,
    AIChatSessionModule,
    DeepFilterNetModule,
  ],
})
export class AppModule {}
