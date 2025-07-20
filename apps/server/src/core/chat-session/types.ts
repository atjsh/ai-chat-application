import { randomUUID } from 'node:crypto';

export class ChatSession {
  private readonly type = 'ChatSession';
  public readonly id: string = randomUUID();

  constructor() {}
}

export type ChatSessionId = ChatSession['id'];

export type ChatSessionsMap = Map<ChatSessionId, ChatSession>;
