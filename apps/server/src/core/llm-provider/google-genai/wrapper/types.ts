import { GenerationConfig, GoogleGenAI } from '@google/genai';
import { randomUUID } from 'node:crypto';

export class GoogleGenAIClient {
  private readonly type = 'GoogleGenAIClient';
  public readonly id: string = randomUUID();

  constructor(
    public readonly googleGenAI: GoogleGenAI,
    public readonly modelId: string,
    public readonly generationConfig?: Partial<GenerationConfig>,
  ) {}
}

export type GoogleGenAIClientId = GoogleGenAIClient['id'];

export type GoogleGenAIClientsMap = Map<GoogleGenAIClientId, GoogleGenAIClient>;
