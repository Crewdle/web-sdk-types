import { GenerativeAIJobType } from '../GenerativeAIJobType';
import { IJobResult } from '../../job/Job';

/**
 * The AI job result Interface
 * Represents the result of an AI job.
 * @category AI
 */
export interface IGenerativeAIJobResult extends IJobResult {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType;
  /**
   * The index of the output, in case of partial results.
   */
  index?: number;
}
