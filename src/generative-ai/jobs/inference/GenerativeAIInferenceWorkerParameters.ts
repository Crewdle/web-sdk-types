import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * Parameters for the Inference worker.
 * @category AI
 */
export interface IGenerativeAIInferenceWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.Inference;

  /**
   * The model to use for inference.
   */
  model: string;

  /**
   * The input data for the inference.
   */
  messages: any[];

  /**
   * The temperature for the inference.
   */
  temperature: number;

  /**
   * The max tokens for the inference.
   */
  maxTokens: number;
}
