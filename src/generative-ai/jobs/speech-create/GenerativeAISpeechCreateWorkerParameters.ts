import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * Represents the parameters to create a speech create worker
 * @category AI
 */
export interface IGenerativeAISpeechCreateWorkerParameters extends IGenerativeAIWorkerParameters {
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
   * The model to use.
   */
  model: string;

  /**
   * The instructions to use.
   */
  instructions?: string;
}
