import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIInferenceTool } from '../inference';
import { IGenerativeAIToolCallResult } from './GenerativeAIToolCallResult';
/**
 * Represents a tool call job.
 * @category AI
 */
export interface IGenerativeAIToolCallJob extends IGenerativeAIJob {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.ToolCall;
    /**
     * The tool to be processed.
     */
    tool: IGenerativeAIInferenceTool;
    /**
     * Runs the job.
     * @returns A promise that resolves with the result of the job.
     */
    run: () => Promise<IGenerativeAIToolCallResult>;
}
