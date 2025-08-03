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
   * The workflow ID.
   */
  workflowId: string;

  /**
   * The user id to use for the prompt.
   */
  userId?: string;

  /**
   * The namespace to use for the prompt.
   */
  namespace?: string;

  /**
   * The prompt for the AI job.
   */
  prompt: string;

  /**
   * The thread ID
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
}
