import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

import { AIChatSessionService } from './ai-chat-session.service';

@Injectable()
export class AIChatSessionGuard implements CanActivate {
  constructor(private readonly aiChatSessionService: AIChatSessionService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = this.extractTokenFromHeader(request);

    if (apiKey && this.aiChatSessionService.checkStaticAPIKey(apiKey)) {
      return true;
    }

    return false;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
