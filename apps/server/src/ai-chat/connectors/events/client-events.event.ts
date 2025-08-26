export class AIChatLiveSessionResponseCreateEventPayload {
  chatSessionId: string;
  input: {
    content: (
      | {
          role: 'user' | 'assistant' | 'developer' | 'system';
          type: 'message';
          content: string;
        }
      | {
          type: 'function_call';
          name: string;
          call_id: string;
          arguments: string;
        }
      | {
          type: 'function_call_output';
          call_id: string;
          output: string;
        }
    )[];
  }[];
}
export const AIChatLiveSessionResponseCreateEventName = 'response.create';

export class AIChatLiveSessionResponseCancelEventPayload {
  chatSessionId: string;
}
export const AIChatLiveSessionResponseCancelEventName = 'response.cancel';
