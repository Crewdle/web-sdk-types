import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIPromptResult, IPromptHistory } from '../prompt';
import { IGenerativeAIInferenceTool } from './GenerativeAIInferenceWorkerParameters';

/**
 * Represents bounded inference job ready to be executed
 * @category AI
 */
export interface IGenerativeAIInferenceJob extends IGenerativeAIJob {
  /**
   * The thread id
   */
  threadId: string;

  /**
   * The prompt to be processed.
   */
  prompt: string;

  /**
   * The instructions for the AI job.
   */
  instructions?: string;
  
  /**
   * The grammar to use for the AI job.
   */
  grammar?: any;

  /**
   * Enable reasoning for the AI job.
   */
  reasoning?: boolean;

  /**
   * The context for the AI job.
   */
  history?: IPromptHistory[];

  /**
   * The model to use for inference.
   */
  model: string;

  /**
   * The temperature for the inference.
   */
  temperature?: number;

  /**
   * The max tokens for the inference.
   */
  maxTokens?: number;

  /**
   * tools for the AI job.
   */
  tools?: IGenerativeAIInferenceTool[];

  /**
   * The internal context used by the AI job.
   */
  internalContext?: {[key: string]: string};

  /**
   * Run the inference job.
   * @returns A promise that resolves with the result.
   */
  run: () => Promise<IGenerativeAIPromptResult>;

  /**
   * Stream the inference job.
   * @returns A promise that resolves with the result.
   */
  stream: () => AsyncGenerator<IGenerativeAIPromptResult>;
}
