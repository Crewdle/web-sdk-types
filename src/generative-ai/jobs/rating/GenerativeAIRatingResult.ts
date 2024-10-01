import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IJobResultGenerativeAI } from '../../job/JobResultGenerativeAI';
import { GenerativeAIRatingStatus } from './GenerativeAIRatingStatus';

/**
 * The AI rating result Interface
 * Represents the result of an AI rating.
 * @category AI
 */
export interface IGenerativeAIRatingResult extends IJobResultGenerativeAI {
  /**
   * The rating AI job type.
   */
  type: GenerativeAIJobType.Rating;
  /**
   * The status of the rating.
   */
  status: GenerativeAIRatingStatus;
}
