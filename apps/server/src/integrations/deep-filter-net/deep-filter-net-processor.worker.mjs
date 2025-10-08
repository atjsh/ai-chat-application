// @ts-check

import * as Comlink from 'comlink';
import nodeEndpoint from 'comlink/dist/umd/node-adapter.js';
import { df_create, df_process_frame } from 'deepFilterNet';
import { readFile } from 'node:fs/promises';
import { parentPort } from 'node:worker_threads';

/** @type {Uint8Array | null} */
let modelData = null;

/**
 * @param {import('node:fs').PathLike} modelPath
 * @returns {Promise<Uint8Array>}
 */
async function loadModel(modelPath) {
  modelData = await readFile(modelPath);
  return modelData;
}

/**
 * @param {import('node:fs').PathLike} modelPath
 * @returns {Promise<Uint8Array>}
 */
async function getModelData(modelPath) {
  if (modelData) {
    return modelData;
  }
  return loadModel(modelPath);
}

/**
 * @typedef {Object} CreateDeepFilterNetContextParams
 * @property {number} attenuationLimitDb Attenuation limit in decibels (dB) for the noise suppression.
 */

/**
 * @param {import('node:fs').PathLike} modelPath
 * @param {CreateDeepFilterNetContextParams} params
 * @returns {Promise<import('./deep-filter-net-context.class.js').DeepFilterNetContext>}
 */
async function createDeepFilterNetContext(modelPath, params) {
  const context = df_create(await getModelData(modelPath), params.attenuationLimitDb);
  return context;
}

/**
 * @param {import('./deep-filter-net-context.class.js').DeepFilterNetContext} context
 * @param {Float32Array} inputFrame
 */
async function processFrame(context, inputFrame) {
  return df_process_frame(context, inputFrame);
}

/**
 * @typedef {typeof ComlinkObject} ComlinkObject
 */
const ComlinkObject = { createDeepFilterNetContext, processFrame };

// @ts-ignore
Comlink.expose(ComlinkObject, nodeEndpoint(parentPort));
