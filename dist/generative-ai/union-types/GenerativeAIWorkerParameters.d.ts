import { IGenerativeAISearchWorkerParameters } from '../jobs/search';
import { IGenerativeAIDownloadDocumentWorkerParameters } from '../jobs/download-document';
import { IGenerativeAIPromptWorkerParameters } from '../jobs/prompt';
import { IGenerativeAIRatingWorkerParameters } from '../jobs/rating';
/**
 * Union type for AI job worker parameters.
 * @category AI
 */
export type GenerativeAIWorkerParameters = IGenerativeAIPromptWorkerParameters | IGenerativeAIRatingWorkerParameters | IGenerativeAIDownloadDocumentWorkerParameters | IGenerativeAISearchWorkerParameters;
