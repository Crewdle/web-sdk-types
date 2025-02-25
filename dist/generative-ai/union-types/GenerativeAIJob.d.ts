import { IGenerativeAICollectionCreateJob, IGenerativeAICollectionDeleteJob, IGenerativeAIEmbedJob, IGenerativeAIFileDeleteJob, IGenerativeAIFileIngestJob, IGenerativeAIFileListJob, IGenerativeAIInferenceJob, IGenerativeAIWorkflowJob } from '../jobs';
import { IGenerativeAICollectionQueryJob } from '../jobs/collection-query/GenerativeAICollectionQueryJob';
import { IGenerativeAIFileDownloadJob } from '../jobs/file-download';
import { IGenerativeAIPromptJob } from '../jobs/prompt';
import { IGenerativeAIRatingJob } from '../jobs/rating';
/**
 * Represents a Generative AI job.
 * @category AI
 */
export type GenerativeAIJob = IGenerativeAICollectionCreateJob | IGenerativeAICollectionDeleteJob | IGenerativeAICollectionQueryJob | IGenerativeAIEmbedJob | IGenerativeAIFileDeleteJob | IGenerativeAIFileDownloadJob | IGenerativeAIFileIngestJob | IGenerativeAIFileListJob | IGenerativeAIInferenceJob | IGenerativeAIPromptJob | IGenerativeAIRatingJob | IGenerativeAIWorkflowJob;
