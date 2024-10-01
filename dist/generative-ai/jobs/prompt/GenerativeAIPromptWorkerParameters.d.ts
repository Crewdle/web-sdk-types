import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic/GenerativeAIWorkerParameters';
/**
 * AI prompt job parameters Interface
 * @category AI
 */
export interface IGenerativeAIPromptWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Prompt;
    /**
     * The prompt for the AI job.
     */
    prompt: string;
    /**
     * The thread ID
     */
    threadId: string;
}
