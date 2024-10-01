import { IGenerativeAIRatingOptions, IGenerativeAIRatingResult, GenerativeAIRating } from '.';
import { IGenerativeAIJob } from '../generic';

/**
 * Represents bounded rating job ready to be run or streamed.
 * @category AI
 */
export interface IGenerativeAIRatingJob extends IGenerativeAIJob {
  /**
   * The job ID.
   */
  id: string;

  /**
   * The rating for the job.
   */
  rating: GenerativeAIRating;

  /**
   * The options for the rating.
   */
  options: IGenerativeAIRatingOptions;

  /**
   * Run the rating job.
   * @returns A promise that resolves with the result
   */
  rate: () => Promise<IGenerativeAIRatingResult>;
}
