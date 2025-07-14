import { IGenerativeAIPromptFile, IGenerativeAIPromptResult, IPromptHistory } from '.';
import { IGenerativeAIJob } from '../generic';

/**
 * Represents bounded prompt job ready to be run or streamed.
 * @category AI
 */
export interface IGenerativeAIPromptJob extends IGenerativeAIJob {
  /**
   * The workflow id to use for the prompt.
   */
  workflowId: string;

  /**
   * The namespace to use for the prompt.
   */
  namespace?: string;

  /**
   * The prompt to be processed
   */
  prompt: string;

  /**
   * The thread id
   */
  threadId: string;

  /**
   * The job id
   */
  jobId?: string;

  /**
   * The agent id
   */
  agentId?: string;

  /**
   * The context for the AI job.
   */
  history?: IPromptHistory[];

  /**
   * The internal context for the AI job.
   */
  internalContext?: {[key: string]: string};

  /**
   * The files that will be used by the LLM.
   */
  files?: IGenerativeAIPromptFile[];

  /**
   * Run the prompt job.
   * @returns A promise that resolves with the result
   */
  run: () => Promise<IGenerativeAIPromptResult>;

  /**
   * Stream the prompt job.
   * @returns An async generator that yields the result
   */
  stream: () => AsyncGenerator<IGenerativeAIPromptResult>;
}
