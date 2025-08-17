import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { ChatSessionEphemeralAPITokenPayload } from './ai-chat-session.types';

@Injectable()
export class AIChatSessionService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  checkStaticAPIKey(apiKey: string): boolean {
    const staticAPIKey = this.configService.get<string>('STATIC_API_KEY');
    return apiKey === staticAPIKey;
  }

  createEphemeralAPIToken(): { token: string; expiresAt: Date } {
    const payload: ChatSessionEphemeralAPITokenPayload = { ephemeral: true };
    const token = this.jwtService.sign(payload);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
    return { token, expiresAt };
  }

  verifyEphemeralAPIToken(token: string): ChatSessionEphemeralAPITokenPayload | null {
    try {
      return this.jwtService.verify<ChatSessionEphemeralAPITokenPayload>(token);
    } catch (error) {
      console.error('Invalid ephemeral API token', error);
      return null;
    }
  }
}
