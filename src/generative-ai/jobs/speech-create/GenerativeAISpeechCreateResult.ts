import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';

/**
 * Represents the result of a speech create job.
 * @category AI
 */
export interface IGenerativeAISpeechCreateResult extends IGenerativeAIJobResult {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.SpeechCreate;

  /**
   * The audio data for the generated speech.
   */
  audio: ReadableStream;
}
