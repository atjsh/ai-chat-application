import { Provider } from '@nestjs/common';

import { type GoogleGenAIClientsMap } from './types';

/**
 * @see {GoogleGenAIClientsMap}
 */
export const GoogleGenAIClientsMapInjectionToken = Symbol.for('GoogleGenAIClientsMap');

export const GoogleGenAIClientsMapProvider: Provider<GoogleGenAIClientsMap> = {
  provide: GoogleGenAIClientsMapInjectionToken,
  useValue: new Map(),
};
