import { GenerativeAITaskType } from '../../GenerativeAIWorkerConnector';
import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
import { IGenerativeAIInferenceTool } from '../inference';
/**
 * The result of a RealtimeSessionCreate job.
 * @category AI
 */
export interface IGenerativeAIRealtimeSessionCreateResult extends IGenerativeAIJobResult {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.RealtimeSessionCreate;
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * The type of session.
     */
    sessionType: 'speech-to-speech' | 'chained';
    /**
     * The first agent.
     */
    firstAgent: IGenerativeAIRealtimeSessionAgent;
    /**
     * The last agent.
     */
    lastAgent?: IGenerativeAIRealtimeSessionAgent;
}
export interface IGenerativeAIRealtimeSessionAgent {
    /**
     * The model ID.
     */
    modelId: string;
    /**
     * The task type.
     */
    taskType: GenerativeAITaskType;
    /**
     * The instructions.
     */
    instructions: string;
    /**
     * The temperature.
     */
    temperature?: number;
    /**
     * The max tokens.
     */
    maxTokens?: number;
    /**
     * The initial prompt.
     */
    initialPrompt?: string;
    /**
     * The voice for the LLM.
     */
    voice?: string;
    /**
     * The language for the LLM.
     */
    language?: string;
    /**
     * The tools for the Realtime Session.
     */
    tools?: IGenerativeAIInferenceTool[];
}
