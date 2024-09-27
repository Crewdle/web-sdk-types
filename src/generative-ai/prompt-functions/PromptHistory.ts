import { PromptSource } from './PromptSource';

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
;
