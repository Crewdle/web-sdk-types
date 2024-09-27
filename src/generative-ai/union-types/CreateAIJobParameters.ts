import { IGenerativeAIPromptCreateJobParameters } from '../jobs/prompt';
import { IGenerativeAIRatingCreateJobParameters } from '../jobs/rating';

/**
 * Represents the parameters of an AI job.
 * @category AI
 */
export type CreateAIJobParameters =
  | IGenerativeAIPromptCreateJobParameters
  | IGenerativeAIRatingCreateJobParameters
;
