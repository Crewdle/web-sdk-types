import { IJobParameters, IJobResult } from '../job';

/**
 * The AI prompt rating Enum
 * @category AI
 */
export enum PromptRating {
  Up = 'up',
  Down = 'down',
}

/**
 * The AI prompt source Enum
 * @category AI
 */
export enum PromptSource {
  /**
   * The prompt was generated by the AI.
   */
  AI = 'ai',

  /**
   * The prompt was generated by a human.
   */
  Human = 'human',
};

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
};

/**
 * The AI prompt function parameters Interface
 * Represents the parameters for a prompt function.
 * @category AI
 */
export interface IPromptFunctionParams {
  [key: string]: {
    type: 'string' | 'number' | 'boolean';
  };
}

/**
 * The AI prompt function Interface
 * Represents a function that can be called by the LLM.
 * @category AI
 */
export interface IPromptFunction {
  /**
   * The function description.
   */
  description: string;

  /**
   * The function parameters.
   */
  params?: IPromptFunctionParams;

  /**
   * The function callback.
   */
  callback: (params?: { [key: string]: string | number | boolean }) => string | Promise<string>;
}

export type AIJobOptions = IPromptOptions | IRatingOptions;

/**
 * The AI options Interface
 * Represents the options for an AI job.
 * @category AI
 */
export interface IAIOptions {
  /**
   * The thread id
   */
  threadId?: string;
}

/**
 * The AI prompt options Interface
 * Represents the options for an AI prompt.
 * @category AI
 */
export interface IPromptOptions extends IAIOptions {
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

/**
 * The AI rating options Interface
 * Represents the options for an AI rating.
 * @category AI
 */
export interface IRatingOptions extends IAIOptions {}

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
export interface IGenerativeAIPromptResult extends IJobResultAI {
  /**
   * The prompt AI job type.
   */
  type: AIJobType.Prompt;

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
 * The AI rating status Enum
 * @category AI
 */
export enum AIRatingStatus {
  Success = 'success',
  Error = 'error',
}

/**
 * The AI rating result Interface
 * Represents the result of an AI rating.
 * @category AI
 */
export interface IGenerativeAIRatingResult extends IJobResultAI {
  /**
   * The rating AI job type.
   */
  type: AIJobType.Rating;
  /**
   * The status of the rating.
   */
  status: AIRatingStatus;
}

export type GenerativeAIJobResult = IGenerativeAIPromptResult | IGenerativeAIRatingResult;

/**
 * The AI job result Interface
 * Represents the result of an AI job.
 * @category AI
 */
export interface IJobResultAI extends IJobResult {
  /**
   * The AI job type.
   */
  type: AIJobType;
  /**
   * The index of the output, in case of partial results.
   */
  index?: number;
}

/**
 * The AI job type Enum
 * @category AI
 */
export const enum AIJobType {
  /**
   * The AI job generates a prompt.
   */
  Prompt = 'prompt',
  /**
   * The AI job rates a prompt.
   */
  Rating = 'rate',
}

/**
* The AI job parameters Interface
* Parameters for AI job type.
* @category AI
*/
export interface IJobParametersGenerativeAI extends IJobParameters, IPromptOptions, IRatingOptions {
   /**
    * The AI job type.
    */
   type: AIJobType;
   /**
    * The thread id, if within a conversation.
    */
   threadId: string;
}

export type GenerativeAIJobParameters =  IGenerativeAIPromptWorkerParameters | IGenerativeAIRatingWorkerParameters;

export interface IGenerativeAIWorkerParameters extends IJobParametersGenerativeAI {
  /**
   * The AI job type.
   */
  type: AIJobType;
}

export interface IGenerativeAIPromptWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: AIJobType.Prompt;
  /**
   * The prompt for the AI job.
   */
  prompt: string;
}

export interface IGenerativeAIRatingWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: AIJobType.Rating;

  /**
   * The job ID.
   */
  jobId: string;

  /**
   * The rating for the AI prompt.
   */
  rating: PromptRating;

  /**
   * The feedback for the AI prompt
   */
  feedback?: string;
}

export type GenerativeAIWorkerConnectorParameters = IGenerativeAIPromptWorkerConnectorParameters;
export type GenerativeAIWorkerConnectorResult = IGenerativeAIWorkerConnectorPromptResult
export type GenerativeAIWorkerConnectorTypes = GenerativeAIWorkerConnectorResult['type'];

export interface IGenerativeAIWorkerConnectorPromptResult extends IGenerativeAIPromptResult {}

export interface IGenerativeAIWorkerConnectorParameters {
  /**
   * The AI job type.
   */
  type: AIJobType;
}

export interface IGenerativeAIPromptWorkerConnectorParameters extends IGenerativeAIWorkerConnectorParameters, IPromptOptions {
  /**
   * The AI job type.
   */
  type: AIJobType.Prompt;
  /**
   * The prompt for the AI job.
   */
  prompt: string;
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
