import { IGenerativeAIFileDownloadResult } from '../jobs/file-download';
import { IGenerativeAIPromptResult } from '../jobs/prompt';
import { IGenerativeAIRatingResult } from '../jobs/rating';

/**
 * Union type for an AI job result.
 * Represents the result of an AI job.
 * @category AI
 */
export type GenerativeAIJobResult =
  | IGenerativeAIPromptResult
  | IGenerativeAIRatingResult
  | IGenerativeAIFileDownloadResult
;
