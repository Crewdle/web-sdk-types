import { IGenerativeAICollectionCreateCreateJobParameters, IGenerativeAICollectionDeleteCreateJobParameters, IGenerativeAIEmbedCreateJobParameters, IGenerativeAIFileDeleteCreateJobParameters, IGenerativeAIFileIngestCreateJobParameters, IGenerativeAIFileListCreateJobParameters, IGenerativeAIInferenceCreateJobParameters, IGenerativeAIRealtimeSessionCreateCreateJobParameters, IGenerativeAIToolCallCreateJobParameters } from '../jobs';
import { IGenerativeAICollectionQueryCreateJobParameters } from '../jobs/collection-query/GenerativeAICollectionQueryCreateJobParameters';
import { IGenerativeAIFileDownloadCreateJobParameters } from '../jobs/file-download';
import { IGenerativeAIPromptCreateJobParameters } from '../jobs/prompt';
import { IGenerativeAIRatingCreateJobParameters } from '../jobs/rating';
import { IGenerativeAISpeechCreateCreateJobParameters } from '../jobs/speech-create';

/**
 * Represents the parameters of an AI job.
 * @category AI
 */
export type CreateAIJobParameters =
  | IGenerativeAICollectionCreateCreateJobParameters
  | IGenerativeAICollectionDeleteCreateJobParameters
  | IGenerativeAICollectionQueryCreateJobParameters
  | IGenerativeAIEmbedCreateJobParameters
  | IGenerativeAIFileDeleteCreateJobParameters
  | IGenerativeAIFileDownloadCreateJobParameters
  | IGenerativeAIFileIngestCreateJobParameters
  | IGenerativeAIFileListCreateJobParameters
  | IGenerativeAIInferenceCreateJobParameters
  | IGenerativeAIPromptCreateJobParameters
  | IGenerativeAIRatingCreateJobParameters
  | IGenerativeAIRealtimeSessionCreateCreateJobParameters
  | IGenerativeAISpeechCreateCreateJobParameters
  | IGenerativeAIToolCallCreateJobParameters
;
