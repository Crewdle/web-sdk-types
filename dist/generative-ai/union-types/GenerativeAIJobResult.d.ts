import { IGenerativeAIFileDownloadResult } from '../jobs/file-download';
import { IGenerativeAIPromptResult } from '../jobs/prompt';
import { IGenerativeAIRatingResult } from '../jobs/rating';
import { IGenerativeAIFileListResult } from '../jobs/file-list';
import { IGenerativeAICollectionCreateResult } from '../jobs/collection-create';
import { IGenerativeAICollectionDeleteResult } from '../jobs/collection-delete';
import { IGenerativeAIFileDeleteResult } from '../jobs/file-delete';
import { IGenerativeAIFileIngestResult } from '../jobs/file-ingest';
import { IGenerativeAICollectionQueryResult } from '../jobs/collection-query';
import { IGenerativeAIRealtimeSessionCreateResult } from '../jobs/realtime-session-create';
/**
 * Union type for an AI job result.
 * Represents the result of an AI job.
 * @category AI
 */
export type GenerativeAIJobResult = IGenerativeAIPromptResult | IGenerativeAIRatingResult | IGenerativeAICollectionCreateResult | IGenerativeAICollectionDeleteResult | IGenerativeAICollectionQueryResult | IGenerativeAIFileDeleteResult | IGenerativeAIFileDownloadResult | IGenerativeAIFileIngestResult | IGenerativeAIFileListResult | IGenerativeAIRealtimeSessionCreateResult;
