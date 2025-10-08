import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AIChatSessionConfig } from '../config/ai-chat-session.config';

import { AIChatSessionController } from './ai-chat-session.controller';
import { AIChatSessionGuard } from './ai-chat-session.guard';
import { AIChatSessionService } from './ai-chat-session.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [AIChatSessionConfig],
      useFactory: (config: AIChatSessionConfig) => ({
        secret: config.jwt.secret,
        signOptions: { expiresIn: config.jwt.expiresIn },
      }),
    }),
  ],
  controllers: [AIChatSessionController],
  providers: [AIChatSessionService, AIChatSessionGuard],
  exports: [AIChatSessionService],
})
export class AIChatSessionModule {}
