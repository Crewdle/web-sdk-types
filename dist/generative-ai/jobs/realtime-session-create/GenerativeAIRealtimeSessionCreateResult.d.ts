import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
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
     * The model ID.
     */
    modelId: string;
    /**
     * The instructions.
     */
    instructions: string;
}
