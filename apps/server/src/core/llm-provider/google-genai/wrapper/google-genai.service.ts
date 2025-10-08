import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';

import { GoogleGenAILLMProviderConfig } from '../../../../config/core/llm-provider/google-genai.config';

import { GoogleGenAIClientRepository } from './google-genai-client.repository';

@Injectable()
export class GoogleGenAIService {
  constructor(
    private readonly googleGenAILLMProviderConfig: GoogleGenAILLMProviderConfig,
    private readonly googleGenAIClientRepository: GoogleGenAIClientRepository,
  ) {}

  initClient() {
    const apiKey = this.googleGenAILLMProviderConfig.apiKey;
    const modelId = this.googleGenAILLMProviderConfig.modelId;

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
