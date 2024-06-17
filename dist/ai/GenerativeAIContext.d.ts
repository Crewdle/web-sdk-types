import { IPromptOptions, IPromptResult } from '.';
/**
 * Represents a context for a Generative AI service.
 * @category AI
 */
export interface IGenerativeAIContext {
    /**
     * Stream the response from the AI service.
     * @param prompt The prompt to start processing.
     * @returns An async generator that yields the response.
     */
    stream(prompt: string, options?: IPromptOptions): AsyncGenerator<IPromptResult>;
    /**
     * Process the response from the AI service.
     * @param prompt The prompt to start processing.
     * @returns A promise that resolves with the response.
     */
    prompt(prompt: string, options?: IPromptOptions): Promise<IPromptResult>;
    /**
     * Close the Generative AI Context.
     */
    close(): void;
}
