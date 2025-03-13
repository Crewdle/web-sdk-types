import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
import { IPromptHistory } from './options';

/**
 * Represents the parameters of a prompt job.
 * @category AI
 */

export interface IGenerativeAIPromptCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The prompt job type.
   */
  type: GenerativeAIJobType.Prompt;

  /**
   * The workflow id to use for the prompt.
   */
  workflowId: string;

  /**
   * The prompt to be processed.
   */
  prompt: string;

  /**
   * The thread id
   */
  threadId: string;

  /**
   * The context for the AI job.
   */
  history?: IPromptHistory[];

  /**
   * The internal context for the AI job.
   */
  internalContext?: {[key: string]: string};
}
