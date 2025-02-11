import { IGenerativeAIOptions } from '../generic/GenerativeAIOptions';
import { IPromptFunction, IPromptHistory } from './options';
export interface IGenerativeAIPromptFile {
    /**
     * The name of the file.
     */
    name: string;
    /**
     * The type of the file.
     */
    type: string;
    /**
     * The content of the file.
     */
    content: string;
}
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
     * The grammar to use for the AI job.
     */
    grammar?: string;
    /**
     * Enable reasoning for the AI job.
     */
    reasoning?: boolean;
    /**
     * The context for the AI job.
     */
    history?: IPromptHistory[];
    /**
     * The internal context for the AI job.
     */
    internalContext?: {
        [key: string]: string;
    };
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
    /**
     * The files that will be used by the LLM.
     */
    files?: IGenerativeAIPromptFile[];
}
