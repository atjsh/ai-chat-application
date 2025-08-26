import {
  AIChatLiveSessionResponseCancelEventPayload,
  AIChatLiveSessionResponseCreateEventPayload,
} from './client-events.event';
import {
  AIChatLiveSessionReadyEventPayload,
  AIChatLiveSessionResponseCreatedEventPayload,
  AIChatLiveSessionResponseDoneEventPayload,
  AIChatLiveSessionResponseFunctionCallArgumentsDoneEventPayload,
  AIChatLiveSessionResponseTextDeltaEventPayload,
} from './server-events.event';

export type AIChatLiveSessionClientEventUnion =
  | AIChatLiveSessionResponseCreateEventPayload
  | AIChatLiveSessionResponseCancelEventPayload;

export type AIChatLiveSessionServerEventUnion =
  | AIChatLiveSessionReadyEventPayload
  | AIChatLiveSessionResponseCreatedEventPayload
  | AIChatLiveSessionResponseTextDeltaEventPayload
  | AIChatLiveSessionResponseFunctionCallArgumentsDoneEventPayload
  | AIChatLiveSessionResponseDoneEventPayload;
