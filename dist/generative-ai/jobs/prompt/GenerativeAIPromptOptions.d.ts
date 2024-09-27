import { IGenerativeAIOptions } from '../generic/GenerativeAIOptions';
import { IPromptFunction, IPromptHistory } from '../../prompt-functions';
/**
 * The AI prompt options Interface
 * Represents the options for an AI prompt.
 * @category AI
 */
export interface IGenerativeAIPromptOptions extends IGenerativeAIOptions {
    /**
     * The thread id
     */
    threadId: string;
    /**
     * The instructions for the AI job.
     */
    instructions?: string;
    /**
     * The context for the AI job.
     */
    history?: IPromptHistory[];
    /**
     * The maximum number of tokens to generate.
     */
    maxTokens?: number;
    /**
     * The temperature for the LLM.
     */
    temperature?: number;
    /**
     * The functions that can be called by the LLM.
     */
    functions?: Map<string, IPromptFunction>;
}
