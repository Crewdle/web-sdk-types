import { IGenerativeAIRatingOptions, IGenerativeAIRatingResult, GenerativeAIRating } from '.';
/**
 * Represents bounded rating job ready to be run or streamed.
 * @category AI
 */
export interface IGenerativeAIRatingJob {
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