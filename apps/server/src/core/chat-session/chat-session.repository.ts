import { Inject, Injectable } from '@nestjs/common';
import { ChatSessionsMapInjectionToken } from './providers';
import { ChatSession, ChatSessionId, ChatSessionsMap } from './types';

@Injectable()
export class ChatSessionRepository {
  constructor(
    @Inject(ChatSessionsMapInjectionToken)
    private readonly chatSessionsMap: ChatSessionsMap,
  ) {}

  create(): ChatSession {
    const chatSession = new ChatSession();
    this.chatSessionsMap.set(chatSession.id, chatSession);
    return chatSession;
  }

  remove(chatSessionId: ChatSessionId): void {
    this.chatSessionsMap.delete(chatSessionId);
  }
}
