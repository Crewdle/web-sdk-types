import { IJobParameters, IJobResult } from '../job';

export enum PromptSource {
  AI = 'ai',
  Human = 'human',
};

export interface IPromptHistory {
  source: PromptSource;
  message: string;
};

/**
 * The AI job parameters Interface
 * Parameters for AI job type.
 * @ignore
 */
export interface IJobParametersAI extends IJobParameters {
  /**
   * The prompt for the AI job.
   */
  prompt: string;

  /**
   * The instructions for the AI job.
   */
  instructions?: string;

  /**
   * Whether to use RAG for the AI job.
   */
  useRAG?: boolean;

  /**
   * The context for the AI job.
   */
  context?: IPromptHistory[];
}

/**
 * The AI job result Interface
 * Represents the result of an AI job.
 * @ignore
 */
export interface IJobResultAI extends IJobResult {
  /**
   * The output of the AI job.
   */
  output: string;

  /**
   * The tokens used by the AI job.
   */
  inputTokens?: number;

  /**
   * The tokens generated by the AI job.
   */
  outputTokens?: number;

  /**
   * The index of the output, in case of partial results.
   */
  index?: number;
}