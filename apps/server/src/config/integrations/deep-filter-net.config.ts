import { ConfigType, registerAs } from '@nestjs/config';

import { expectPropertyExists } from '../../typescript/expect';

export const DeepFilterNetIntegrationsConfigFactory = registerAs(
  Symbol.for('DeepFilterNetIntegrationsConfig'),
  () =>
    ({
      onnxModelPath: expectPropertyExists(process.env, 'INTEGRATIONS__DEEP_FILTER_NET__ONNX_MODEL_PATH'),
    }) as const,
);

export type DeepFilterNetIntegrationsConfig = ConfigType<typeof DeepFilterNetIntegrationsConfigFactory>;
export const DeepFilterNetIntegrationsConfig = DeepFilterNetIntegrationsConfigFactory.KEY;
