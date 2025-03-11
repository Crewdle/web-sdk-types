import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';
import { IGenerativeAIInferenceTool } from '../inference';
/**
 * Represents the parameters to call a tool.
 * @category AI
 */
export interface IGenerativeAIToolCallWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.ToolCall;
    /**
     * The tool to be processed.
     */
    tool: IGenerativeAIInferenceTool;
    /**
     * The arguments for the tool.
     */
    arguments: {
        [key: string]: string | number | boolean;
    };
}
