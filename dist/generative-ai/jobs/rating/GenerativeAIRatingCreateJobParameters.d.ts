import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { GenerativeAIPromptRating } from './GenerativeAIPromptRating';
import { IGenerativeAIRatingOptions } from './GenerativeAIRatingOptions';
/**
 * Represents the parameters of a rating job.
 * @category AI
 */
export interface IGenerativeAIRatingCreateJobParameters {
    /**
     * The rating job type.
     */
    type: GenerativeAIJobType.Rating;
    /**
     * The job ID associated with the message.
     */
    jobId: string;
    /**
     * The rating of the prompt.
     */
    rating: GenerativeAIPromptRating;
    /**
     * The options for the rating.
     */
    options: IGenerativeAIRatingOptions;
}
