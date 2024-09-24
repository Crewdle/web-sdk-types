import { AIJobType, IPromptOptions, IPromptResult, IRatingOptions, IRatingResult, PromptRating } from '.';
/**
 * Represents bounded prompt job ready to be run or streamed.
 */
export interface IGenerativeAIPromptJob {
    /**
     * The job ID.
     */
    id: string;
    /**
     * The prompt to be processed
     */
    prompt: string;
    /**
     * The options for the prompt.
     */
    options: IPromptOptions;
    /**
     * Run the prompt job.
     * @returns A promise that resolves with the result
     */
    run: () => Promise<IPromptResult>;
    /**
     * Stream the prompt job.
     * @returns An async generator that yields the result
     */
    stream: () => AsyncGenerator<IPromptResult>;
}
/**
 * Represents a Generative AI job.
 */
export type GenerativeAIJob = IGenerativeAIPromptJob | IGenerativeAIRatingJob;
/**
 * Represents bounded rating job ready to be run or streamed.
 */
export interface IGenerativeAIRatingJob {
    /**
     * The job ID.
     */
    id: string;
    /**
     * The rating for the job.
     */
    rating: PromptRating;
    /**
     * The feedback for the job.
     */
    feedback?: string;
    /**
     * The options for the rating.
     */
    options: IRatingOptions;
    /**
     * Run the rating job.
     * @returns A promise that resolves with the result
     */
    rate: () => Promise<IRatingResult>;
}
/**
 * Represents the parameters of an AI job.
 */
export type CreateAIJobParameters = IJobPromptParameters | IJobRatingParameters;
/**
 * Represents the parameters of a prompt job.
 */
export interface IJobPromptParameters {
    /**
     * The prompt job type.
     */
    type: AIJobType.Prompt;
    /**
     * The prompt to be processed.
     */
    prompt: string;
    /**
     * The options for the prompt.
     */
    options?: IPromptOptions;
}
/**
 * Represents the parameters of a rating job.
 */
export interface IJobRatingParameters {
    /**
     * The rating job type.
     */
    type: AIJobType.Rating;
    /**
     * The job ID associated with the message.
     */
    jobId: string;
    /**
     * The rating of the prompt.
     */
    rating: PromptRating;
    /**
     * The feedback for the prompt.
     */
    feedback?: string;
    /**
     * The options for the rating.
     */
    options?: IRatingOptions;
}
/**
 * Represents a context for a Generative AI service.
 * @category AI
 */
export interface IGenerativeAIContext {
    /**
     * Create an AI job. The job is bounded to the context.
     * @param parameters The parameters of the AI job.
     * @returns The job ready to be run or streamed.
     */
    createAIJob(parameters: IJobPromptParameters): IGenerativeAIPromptJob;
    createAIJob(parameters: IJobRatingParameters): IGenerativeAIRatingJob;
    ratePrompt(parameters: IJobRatingParameters): Promise<IRatingResult>;
    /**
     * Get the data bucket IDs.
     * @returns An array of data bucket IDs.
     */
    getDataBucketIds(): Promise<string[]>;
    /**
     * Close the Generative AI Context.
     */
    close(): void;
}
