import { GenerationConfig, GoogleGenAI } from '@google/genai';
import { Inject, Injectable } from '@nestjs/common';

import { GoogleGenAIClientsMapInjectionToken } from './providers';
import { GoogleGenAIClient, GoogleGenAIClientId, GoogleGenAIClientsMap } from './types';

@Injectable()
export class GoogleGenAIClientRepository {
  constructor(
    @Inject(GoogleGenAIClientsMapInjectionToken)
    private readonly clientsMap: GoogleGenAIClientsMap,
  ) {}

  create(params: {
    googleGenAI: GoogleGenAI;
    modelId: string;
    defaultGenerationConfig: Partial<GenerationConfig>;
  }): GoogleGenAIClient {
    const googleGenAIClient = new GoogleGenAIClient(params.googleGenAI, params.modelId, params.defaultGenerationConfig);
    this.clientsMap.set(googleGenAIClient.id, googleGenAIClient);
    return googleGenAIClient;
  }

  remove(googleGenAIClientId: GoogleGenAIClientId): void {
    this.clientsMap.delete(googleGenAIClientId);
  }
}
