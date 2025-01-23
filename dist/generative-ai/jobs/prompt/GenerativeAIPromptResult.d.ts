import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IJobResultGenerativeAI } from '../../job/JobResultGenerativeAI';
import { ISearchResult } from '../../search';
import { PromptTypeText, PromptTypeVector } from './result';
/**
 * The AI prompt result Interface
 * Represents the result of an AI prompt.
 * @category AI
 */
export interface IGenerativeAIPromptResult extends IJobResultGenerativeAI {
    /**
     * The prompt AI job type.
     */
    type: GenerativeAIJobType.Prompt;
    /**
     * The output of the AI job.
     */
    output?: PromptTypeText | PromptTypeVector;
    /**
     * The relevant context used by the AI job.
     */
    context?: ISearchResult[];
    /**
     * The internal context used by the AI job.
     */
    internalContext?: {
        [key: string]: string;
    };
    /**
     * The file generated by the AI job.
     */
    file?: File;
    /**
     * The tokens used by the AI job.
     */
    inputTokens?: number;
    /**
     * The tokens generated by the AI job.
     */
    outputTokens?: number;
}
