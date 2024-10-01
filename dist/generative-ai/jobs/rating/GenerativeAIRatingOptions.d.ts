import { IGenerativeAIOptions } from '../generic/GenerativeAIOptions';
/**
 * The AI rating options Interface
 * Represents the options for an AI rating.
 * @category AI
 */
export interface IGenerativeAIRatingOptions extends IGenerativeAIOptions {
    /**
     * The thread id
     */
    threadId: string;
    /**
     * The user feedback for the AI job.
     */
    feedback?: string;
}
