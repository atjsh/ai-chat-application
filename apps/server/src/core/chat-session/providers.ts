import { Provider } from '@nestjs/common';

import { type ChatSessionsMap } from './types';

/**
 * @see {ChatSessionsMap}
 */
export const ChatSessionsMapInjectionToken = Symbol.for('ChatSessionsMap');

export const ChatSessionMapProvider: Provider<ChatSessionsMap> = {
  provide: ChatSessionsMapInjectionToken,
  useValue: new Map(),
};
