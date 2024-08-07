import { IPromptOptions, IPromptResult } from '.';
/**
 * Represents a context for a Generative AI service.
 * @category AI
 */
export interface IGenerativeAIContext {
    /**
     * Stream the response from the AI service.
     * @param prompt The prompt to start processing.
     * @param options Optional parameters for the prompt.
     * @returns An async generator that yields the response.
     */
    stream(prompt: string, options?: IPromptOptions): AsyncGenerator<IPromptResult>;
    /**
     * Process the response from the AI service.
     * @param prompt The prompt to start processing.
     * @param options Optional parameters for the prompt.
     * @returns A promise that resolves with the response.
     */
    prompt(prompt: string, options?: IPromptOptions): Promise<IPromptResult>;
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
