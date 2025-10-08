import { IGenerativeAIOptions } from '../generic/GenerativeAIOptions';
import { IPromptHistory, PromptFunction } from './options';
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
    grammar?: any;
    /**
     * Reasoning effort for the AI job.
     */
    reasoning?: string;
    /**
     * Verbosity for the AI job.
     */
    verbosity?: string;
    /**
     * The privacy flag for the AI job.
     */
    privacy?: boolean;
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
     * The voice for the LLM.
     */
    voice?: string;
    /**
     * The response format for the LLM.
     */
    responseFormat?: string;
    /**
     * The timestamp granularities for the LLM.
     */
    timestampGranularities?: string;
    /**
     * The language for the LLM.
     */
    language?: string;
    /**
     * The ratio for the LLM.
     */
    ratio?: string;
    /**
     * The duration for the LLM.
     */
    duration?: string;
    /**
     * The functions that can be called by the LLM.
     */
    functions?: Map<string, PromptFunction>;
    /**
     * The files that will be used by the LLM.
     */
    files?: IGenerativeAIPromptFile[];
}
