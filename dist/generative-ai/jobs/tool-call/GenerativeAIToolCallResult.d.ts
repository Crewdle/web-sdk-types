import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
/**
 * The result of a ToolCall job.
 * @category AI
 */
export interface IGenerativeAIToolCallResult extends IGenerativeAIJobResult {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.ToolCall;
    /**
     * The output of the tool.
     */
    output: string;
    /**
     * The internal context for the AI job.
     */
    internalContext?: {
        [key: string]: string;
    };
}
