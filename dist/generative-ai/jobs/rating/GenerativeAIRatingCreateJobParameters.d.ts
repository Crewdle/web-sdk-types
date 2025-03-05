import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
import { GenerativeAIRating } from './GenerativeAIRating';
import { IGenerativeAIRatingOptions } from './GenerativeAIRatingOptions';
/**
 * Represents the parameters of a rating job.
 * @category AI
 */
export interface IGenerativeAIRatingCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The rating job type.
     */
    type: GenerativeAIJobType.Rating;
    /**
     * The workflow ID associated with the message.
     */
    workflowId: string;
    /**
     * The job ID associated with the message.
     */
    jobId: string;
    /**
     * The rating of the prompt.
     */
    rating: GenerativeAIRating;
    /**
     * The options for the rating.
     */
    options: IGenerativeAIRatingOptions;
}
