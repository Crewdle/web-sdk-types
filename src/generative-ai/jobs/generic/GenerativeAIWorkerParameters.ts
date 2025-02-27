import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobParameters } from '../../job/GenerativeAIJobParameters';

/**
 * Base AI job parameters Interface
 * @category AI
 */

export interface IGenerativeAIWorkerParameters extends IGenerativeAIJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType;

  /**
   * The vendor ID.
   */
  vendorId: string;
}
