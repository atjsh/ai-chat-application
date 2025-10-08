import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as Comlink from 'comlink';
import nodeEndpoint from 'comlink/dist/umd/node-adapter';
import { join, resolve } from 'node:path';
import { Worker } from 'node:worker_threads';

import { DeepFilterNetIntegrationsConfig } from '../../config/integrations/deep-filter-net.config';

import { DeepFilterNetContext } from './deep-filter-net-context.class';
import type { ComlinkObject, CreateDeepFilterNetContextParams } from './deep-filter-net-processor.worker.mjs';

@Injectable()
export class DeepFilterNetService implements OnModuleInit, OnModuleDestroy {
  private worker: Worker;
  private workerComlink: Comlink.Remote<ComlinkObject>;

  constructor(
    @Inject(DeepFilterNetIntegrationsConfig)
    private readonly config: DeepFilterNetIntegrationsConfig,
  ) {}

  async onModuleInit() {
    this.worker = new Worker(resolve(join(__dirname, 'deep-filter-net-processor.worker.mjs')));
    this.workerComlink = Comlink.wrap(nodeEndpoint(this.worker));
  }

  async onModuleDestroy() {
    this.worker.terminate();
  }

  public async createDeepFilterNetContext(params: CreateDeepFilterNetContextParams): Promise<DeepFilterNetContext> {
    return await this.workerComlink.createDeepFilterNetContext(this.config.onnxModelPath, params);
  }

  public async processFrame(context: DeepFilterNetContext, inputFrame: Float32Array): Promise<Float32Array> {
    return await this.workerComlink.processFrame(context, Comlink.transfer(inputFrame, [inputFrame.buffer]));
  }
}
