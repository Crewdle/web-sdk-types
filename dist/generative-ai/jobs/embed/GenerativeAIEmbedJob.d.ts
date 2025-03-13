import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIPromptResult } from '../prompt';
/**
 * Represents a job that embeds a given input into a latent space.
 * @category AI
 */
export interface IGenerativeAIEmbedJob extends IGenerativeAIJob {
    /**
     * The model used to embed the input text.
     */
    model: string;
    /**
     * The input text to embed.
     */
    text: string;
    /**
     * Run the embed job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<IGenerativeAIPromptResult>;
}
