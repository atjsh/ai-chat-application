import { Module } from '@nestjs/common';
import { GoogleGenAIProviderModule } from '../llm-provider/google-genai/google-genai-provider.module';

@Module({
  imports: [GoogleGenAIProviderModule],
})
export class LLMSessionModule {}
