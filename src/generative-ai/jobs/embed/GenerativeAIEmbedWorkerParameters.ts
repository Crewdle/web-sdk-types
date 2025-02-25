import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * Parameters for the Embed worker.
 * @category AI
 */
export interface IGenerativeAIEmbedWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.Embed;

  /**
   * The model to use for embedding.
   */
  model: string;

  /**
   * The input text to embed.
   */
  text: string;
}
