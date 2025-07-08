import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a speech create job
 * @category AI
 */
export interface IGenerativeAISpeechCreateCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.SpeechCreate;

  /**
   * The text to generate speech from.
   */
  text: string;

  /**
   * The voice to use.
   */
  voice: string;

  /**
   * The format to use.
   */
  format: string;

  /**
   * The model to use.
   */
  model: string;

  /**
   * The instructions to use.
   */
  instructions?: string;
}