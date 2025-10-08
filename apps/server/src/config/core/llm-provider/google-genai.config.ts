import { registerAs } from '@nestjs/config';

import { expectPropertyExists } from '../../../typescript/expect';

export const GoogleGenAILLMProviderConfigFactory = registerAs(
  Symbol.for('GoogleGenAILLMProviderConfig'),
  () =>
    ({
      apiKey: expectPropertyExists(process.env, 'LLM_PROVIDER__GOOGLE_GENAI__API_KEY'),
      modelId: expectPropertyExists(process.env, 'LLM_PROVIDER__GOOGLE_GENAI__MODEL_ID'),
    }) as const,
);

export type GoogleGenAILLMProviderConfig = ReturnType<typeof GoogleGenAILLMProviderConfigFactory>;
export const GoogleGenAILLMProviderConfig = GoogleGenAILLMProviderConfigFactory.KEY;
