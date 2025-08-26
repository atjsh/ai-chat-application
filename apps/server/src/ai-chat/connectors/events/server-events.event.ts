import { ChatSessionId } from '../../../core/chat-session/types';

export class AIChatLiveSessionReadyEventPayload {
  chatSessionId: ChatSessionId;
}
export const AIChatLiveSessionReadyEventName = 'ready';

export class AIChatLiveSessionResponseCreatedEventPayload {
  chatSessionId: ChatSessionId;
}
export const AIChatLiveSessionResponseCreatedEventName = 'response.created';

export class AIChatLiveSessionResponseTextDeltaEventPayload {
  chatSessionId: ChatSessionId;
  delta: string;
}
export const AIChatLiveSessionResponseTextDeltaEventName = 'response.text.delta';

export class AIChatLiveSessionResponseFunctionCallArgumentsDoneEventPayload {
  chatSessionId: ChatSessionId;
  llmToolId: string;
  functionCallId: string;
  arguments?: Record<string, any>;
}
export const AIChatLiveSessionResponseFunctionCallArgumentsDoneEventName = 'response.function_call.arguments.done';

export class AIChatLiveSessionResponseDoneEventPayload {
  chatSessionId: ChatSessionId;
}
export const AIChatLiveSessionResponseDoneEventName = 'response.done';
