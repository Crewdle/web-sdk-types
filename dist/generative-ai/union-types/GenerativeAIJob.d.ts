import { IGenerativeAISearchJob } from '../jobs/search/GenerativeAISearchJob';
import { IGenerativeAIDownloadDocumentJob } from '../jobs/download-document';
import { IGenerativeAIPromptJob } from '../jobs/prompt';
import { IGenerativeAIRatingJob } from '../jobs/rating';
/**
 * Represents a Generative AI job.
 * @category AI
 */
export type GenerativeAIJob = IGenerativeAIPromptJob | IGenerativeAIRatingJob | IGenerativeAIDownloadDocumentJob | IGenerativeAISearchJob;
