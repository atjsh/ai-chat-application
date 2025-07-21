import { Module } from '@nestjs/common';
import { GoogleGenAIProviderService } from './google-genai-provider.service';
import { GoogleGenAIModule } from './wrapper/google-genai.module';

@Module({
  imports: [GoogleGenAIModule],
  providers: [GoogleGenAIProviderService],
})
export class GoogleGenAIProviderModule {}
