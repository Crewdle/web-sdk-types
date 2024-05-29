import { IJobDispatcher } from 'job';
/**
 * Represents a context for a Generative AI service.
 * @category AI
 */
export interface IGenerativeAIContext extends IJobDispatcher {
    /**
     * Prompt the Generative AI Context to start processing a prompt.
     * @param prompt The prompt to start processing.
     * @returns The response from the AI service.
     */
    prompt(prompt: string): Promise<string>;
    /**
     * Close the Generative AI Context.
     */
    close(): void;
}
