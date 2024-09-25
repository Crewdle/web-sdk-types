import { AIJobType, IPromptOptions, IGenerativeAIPromptResult, IRatingOptions, IGenerativeAIRatingResult, PromptRating } from '.';

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
  run: () => Promise<IGenerativeAIPromptResult>;

  /**
   * Stream the prompt job.
   * @returns An async generator that yields the result
   */
  stream: () => AsyncGenerator<IGenerativeAIPromptResult>;
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
  rate: () => Promise<IGenerativeAIRatingResult>;
}

/**
 * Represents the parameters of an AI job.
 */
export type CreateAIJobParameters = IGenerativeAIPromptParameters | IGenerativeAIRatingParameters;

/**
 * Represents the parameters of a prompt job.
 */
export interface IGenerativeAIPromptParameters {
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
export interface IGenerativeAIRatingParameters {
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
  createAIJob(parameters: IGenerativeAIPromptParameters): IGenerativeAIPromptJob;
  createAIJob(parameters: IGenerativeAIRatingParameters): IGenerativeAIRatingJob;

  /**
   * Rate a prompt.
   * @param parameters The parameters of the rating job.
   * @returns A promise that resolves with the result.
   */
  ratePrompt(parameters: IGenerativeAIRatingParameters): Promise<IGenerativeAIRatingResult>;

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
