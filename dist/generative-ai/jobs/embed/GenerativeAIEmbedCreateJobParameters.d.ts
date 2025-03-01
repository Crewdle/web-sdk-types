import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
/**
 * Represents the parameters for creating a new generative AI job for embedding.
 * @category AI
 */
export interface IGenerativeAIEmbedCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Embed;
    /**
     * The model to use for embedding.
     */
    model: string;
    /**
     * The input text to embed.
     */
    text: string;
    /**
     * The thread ID for the job.
     */
    threadId: string;
}
