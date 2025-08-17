import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AIChatSessionController } from './ai-chat-session.controller';
import { AIChatSessionGuard } from './ai-chat-session.guard';
import { AIChatSessionService } from './ai-chat-session.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AIChatSessionController],
  providers: [AIChatSessionService, AIChatSessionGuard],
  exports: [AIChatSessionService],
})
export class AIChatSessionModule {}
