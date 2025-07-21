import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { GoogleGenAIClientRepository } from './google-genai-client.repository';

@Injectable()
export class GoogleGenAIService {
  constructor(
    private readonly configService: ConfigService,
    private readonly googleGenAIClientRepository: GoogleGenAIClientRepository,
  ) {}

  initClient() {
    const apiKey = this.configService.getOrThrow<string>('LLM_PROVIDER__GOOGLE_GENAI__API_KEY');
    const modelId = this.configService.getOrThrow<string>('LLM_PROVIDER__GOOGLE_GENAI__MODEL_ID');

    const googleGenAI = new GoogleGenAI({
      apiKey: apiKey,
    });

    const googleGenAIClient = this.googleGenAIClientRepository.create({
      googleGenAI,
      modelId,
      defaultGenerationConfig: {},
    });

    return googleGenAIClient;
  }
}
