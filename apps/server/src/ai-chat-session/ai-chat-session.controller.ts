import { Controller, Post, UseGuards } from '@nestjs/common';

import { InitSessionResBody } from './ai-chat-session.dto';
import { AIChatSessionGuard } from './ai-chat-session.guard';
import { AIChatSessionService } from './ai-chat-session.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@UseGuards(AIChatSessionGuard)
export class AIChatSessionController {
  constructor(private readonly aiChatSessionService: AIChatSessionService) {}

  @ApiBearerAuth()
  @Post('/v1/realtime/sessions')
  initSession(): InitSessionResBody {
    const { token, expiresAt } = this.aiChatSessionService.createEphemeralAPIToken();
    return {
      client_secret: {
        value: token,
        expires_at: expiresAt.getTime(),
      },
    };
  }
}
