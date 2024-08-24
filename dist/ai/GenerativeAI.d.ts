import { IJobParameters, IJobResult } from '../job';
/**
 * The AI prompt source Enum
 * @category AI
 */
export declare enum PromptSource {
    /**
     * The prompt was generated by the AI.
     */
    AI = "ai",
    /**
     * The prompt was generated by a human.
     */
    Human = "human"
}
/**
 * The AI prompt history Interface
 * Represents the history of a prompt.
 * @category AI
 */
export interface IPromptHistory {
    /**
     * The source of the prompt.
     */
    source: PromptSource;
    /**
     * The prompt.
     */
    message: string;
}
/**
 * The AI prompt options Interface
 * Represents the options for an AI prompt.
 * @category AI
 */
export interface IPromptOptions {
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
}
/**
 * The AI prompt type text
 */
export type PromptTypeText = string | string[];
/**
 * The AI prompt type vector
 */
export type PromptTypeVector = number[];
/**
 * The AI prompt result Interface
 * Represents the result of an AI prompt.
 * @category AI
 */
export interface IPromptResult {
    /**
     * The output of the AI job.
     */
    output?: PromptTypeText | PromptTypeVector;
    /**
     * The relevant context used by the AI job.
     */
    context?: ISearchResult[];
    /**
     * The tokens used by the AI job.
     */
    inputTokens?: number;
    /**
     * The tokens generated by the AI job.
     */
    outputTokens?: number;
}
/**
 * The AI job parameters Interface
 * Parameters for AI job type.
 * @category AI
 */
export interface IJobParametersAI extends IJobParameters, IPromptOptions {
    /**
     * The prompt for the AI job.
     */
    prompt: string;
}
/**
 * The AI job result Interface
 * Represents the result of an AI job.
 * @category AI
 */
export interface IJobResultAI extends IJobResult, IPromptResult {
    /**
     * The index of the output, in case of partial results.
     */
    index?: number;
}
/**
 * Represents a search result.
 * @category AI
 */
export interface ISearchResult {
    /**
     * The content of the search result.
     */
    content: string;
    /**
     * The relevance of the search result.
     * The relevance is a number between 0 and 1, where 1 is the most relevant.
     */
    relevance: number;
    /**
     * The path name of the document containing the search result.
     */
    pathName: string;
}
/**
 * Represents a content index.
 * @category AI
 */
export interface IIndex {
    /**
     * The content of the index.
     */
    content: string;
    /**
     * The start index of the content.
     */
    start: number;
    /**
     * The length of the content.
     */
    length: number;
}
