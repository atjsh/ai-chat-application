import { Module } from '@nestjs/common';

import { ChatSessionRepository } from './chat-session.repository';
import { ChatSessionMapProvider } from './providers';

@Module({
  providers: [ChatSessionRepository, ChatSessionMapProvider],
  exports: [ChatSessionRepository],
})
export class ChatSessionModule {}
