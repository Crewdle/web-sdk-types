import { IPromptOptions, IPromptResult } from '.';
/**
 * Represents bounded prompt job ready to be run or streamed.
 */
export interface IGenerativeAIPromptJob {
    /**
     * The job ID.
     */
    id: string;
    /**
     * The prompt to be processed
     */
    prompt: string;
    /**
     * The options for the prompt.
     */
    options: IPromptOptions;
    /**
     * Run the prompt job.
     * @returns A promise that resolves with the result
     */
    run: () => Promise<IPromptResult>;
    /**
     * Stream the prompt job.
     * @returns An async generator that yields the result
     */
    stream: () => AsyncGenerator<IPromptResult>;
}
/**
 * Represents a context for a Generative AI service.
 * @category AI
 */
export interface IGenerativeAIContext {
    /**
     * Create a prompt job. The prompt job is bounded to the context.
     * @param prompt The prompt to be processed.
     * @param options The options for the prompt job.
     * @returns The prompt job ready to be run or streamed.
     */
    createAIJob(prompt: string, options?: IPromptOptions): IGenerativeAIPromptJob;
    /**
     * Get the data bucket IDs.
     * @returns An array of data bucket IDs.
     */
    getDataBucketIds(): Promise<string[]>;
    /**
     * Close the Generative AI Context.
     */
    close(): void;
}
