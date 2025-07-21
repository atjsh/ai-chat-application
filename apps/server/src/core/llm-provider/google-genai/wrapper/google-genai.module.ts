import { Module } from '@nestjs/common';

import { GoogleGenAIClientRepository } from './google-genai-client.repository';
import { GoogleGenAIService } from './google-genai.service';
import { GoogleGenAIClientsMapProvider } from './providers';

@Module({
  providers: [GoogleGenAIClientsMapProvider, GoogleGenAIClientRepository, GoogleGenAIService],
  exports: [GoogleGenAIService],
})
export class GoogleGenAIModule {}
