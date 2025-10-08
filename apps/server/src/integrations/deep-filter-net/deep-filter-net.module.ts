import { Module } from '@nestjs/common';

import { DeepFilterNetService } from './deep-filter-net.service';

@Module({
  providers: [DeepFilterNetService],
  exports: [DeepFilterNetService],
})
export class DeepFilterNetModule {}
