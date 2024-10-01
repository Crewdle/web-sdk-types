import { IGenerativeAIPromptOptions } from '../jobs/prompt';
import { IGenerativeAIRatingOptions } from '../jobs/rating';
/**
 * The AI options to parameterize the AI job.
 * @category AI
 */
export type GenerativeAIJobOptions = IGenerativeAIPromptOptions | IGenerativeAIRatingOptions;
