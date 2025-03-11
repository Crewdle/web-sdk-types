import { IGenerativeAICollectionCreateWorkerParameters, IGenerativeAICollectionDeleteWorkerParameters, IGenerativeAIEmbedWorkerParameters, IGenerativeAIFileDeleteWorkerParameters, IGenerativeAIFileIngestWorkerParameters, IGenerativeAIFileListWorkerParameters, IGenerativeAIInferenceWorkerParameters, IGenerativeAIRealtimeSessionCreateWorkerParameters, IGenerativeAIToolCallWorkerParameters } from '../jobs';
import { IGenerativeAICollectionQueryWorkerParameters } from '../jobs/collection-query';
import { IGenerativeAIFileDownloadWorkerParameters } from '../jobs/file-download';
import { IGenerativeAIPromptWorkerParameters } from '../jobs/prompt';
import { IGenerativeAIRatingWorkerParameters } from '../jobs/rating';
/**
 * Union type for AI job worker parameters.
 * @category AI
 */
export type GenerativeAIWorkerParameters = IGenerativeAICollectionCreateWorkerParameters | IGenerativeAICollectionDeleteWorkerParameters | IGenerativeAICollectionQueryWorkerParameters | IGenerativeAIEmbedWorkerParameters | IGenerativeAIFileDeleteWorkerParameters | IGenerativeAIFileDownloadWorkerParameters | IGenerativeAIFileIngestWorkerParameters | IGenerativeAIFileListWorkerParameters | IGenerativeAIInferenceWorkerParameters | IGenerativeAIPromptWorkerParameters | IGenerativeAIRatingWorkerParameters | IGenerativeAIRealtimeSessionCreateWorkerParameters | IGenerativeAIToolCallWorkerParameters;
