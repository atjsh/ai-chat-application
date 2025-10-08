import { ConfigType, registerAs } from '@nestjs/config';

import { expectPropertyExists } from '../typescript/expect';
import { optional } from '../typescript/optional';

export const AIChatSessionConfigFactory = registerAs(
  Symbol.for('AIChatSessionConfig'),
  () =>
    ({
      jwt: {
        secret: expectPropertyExists(process.env, 'JWT_SECRET'),
        expiresIn: optional(process.env.JWT_EXPIRES_IN, '1h'),
      },
    }) as const,
);

export type AIChatSessionConfig = ConfigType<typeof AIChatSessionConfigFactory>;
export const AIChatSessionConfig = AIChatSessionConfigFactory.KEY;
