import { IGenerativeAIPromptOptions, IGenerativeAIPromptResult } from '.';
import { IGenerativeAIJob } from '../generic';
/**
 * Represents bounded prompt job ready to be run or streamed.
 * @category AI
 */
export interface IGenerativeAIPromptJob extends IGenerativeAIJob {
    /**
     * The workflow id to use for the prompt.
     */
    workflowId: string;
    /**
     * The prompt to be processed
     */
    prompt: string;
    /**
     * The options for the prompt.
     */
    options: IGenerativeAIPromptOptions;
    /**
     * Run the prompt job.
     * @returns A promise that resolves with the result
     */
    run: () => Promise<IGenerativeAIPromptResult>;
    /**
     * Stream the prompt job.
     * @returns An async generator that yields the result
     */
    stream: () => AsyncGenerator<IGenerativeAIPromptResult>;
}
