import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { GenerativeAIRating } from './GenerativeAIRating';
import { IGenerativeAIWorkerParameters } from '../generic/GenerativeAIWorkerParameters';

/**
 * AI rating job parameters Interface
 * @category AI
 */

export interface IGenerativeAIRatingWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.Rating;

  /**
   * The job ID.
   */
  jobId: string;

  /**
   * The rating for the AI prompt.
   */
  rating: GenerativeAIRating;

  /**
   * The thread ID
   */
  threadId: string;

  /**
   * The feedback for the AI prompt
   */
  feedback?: string;
}
