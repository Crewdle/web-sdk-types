import { IGenerativeAICollectionCreateCreateJobParameters, IGenerativeAICollectionCreateJob, IGenerativeAICollectionDeleteCreateJobParameters, IGenerativeAICollectionDeleteJob, IGenerativeAIEmbedCreateJobParameters, IGenerativeAIEmbedJob, IGenerativeAIFileDeleteCreateJobParameters, IGenerativeAIFileDeleteJob, IGenerativeAIFileIngestCreateJobParameters, IGenerativeAIFileIngestJob, IGenerativeAIFileListCreateJobParameters, IGenerativeAIFileListJob, IGenerativeAIInferenceCreateJobParameters, IGenerativeAIInferenceJob, IGenerativeAIRealtimeSessionCreateCreateJobParameters, IGenerativeAIRealtimeSessionCreateJob, IGenerativeAISpeechCreateCreateJobParameters, IGenerativeAISpeechCreateJob, IGenerativeAIToolCallCreateJobParameters, IGenerativeAIToolCallJob } from '.';
import { IGenerativeAIFileDownloadCreateJobParameters, IGenerativeAIFileDownloadJob } from './jobs/file-download';
import { IGenerativeAIPromptCreateJobParameters, IGenerativeAIPromptJob } from './jobs/prompt';
import { IGenerativeAIRatingCreateJobParameters, IGenerativeAIRatingJob } from './jobs/rating';
import { IGenerativeAICollectionQueryCreateJobParameters, IGenerativeAICollectionQueryJob } from './jobs/collection-query';
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
    createAIJob(parameters: IGenerativeAICollectionCreateCreateJobParameters): IGenerativeAICollectionCreateJob;
    createAIJob(parameters: IGenerativeAICollectionDeleteCreateJobParameters): IGenerativeAICollectionDeleteJob;
    createAIJob(parameters: IGenerativeAICollectionQueryCreateJobParameters): IGenerativeAICollectionQueryJob;
    createAIJob(parameters: IGenerativeAIEmbedCreateJobParameters): IGenerativeAIEmbedJob;
    createAIJob(parameters: IGenerativeAIFileDeleteCreateJobParameters): IGenerativeAIFileDeleteJob;
    createAIJob(parameters: IGenerativeAIFileDownloadCreateJobParameters): IGenerativeAIFileDownloadJob;
    createAIJob(parameters: IGenerativeAIFileIngestCreateJobParameters): IGenerativeAIFileIngestJob;
    createAIJob(parameters: IGenerativeAIFileListCreateJobParameters): IGenerativeAIFileListJob;
    createAIJob(parameters: IGenerativeAIInferenceCreateJobParameters): IGenerativeAIInferenceJob;
    createAIJob(parameters: IGenerativeAIPromptCreateJobParameters): IGenerativeAIPromptJob;
    createAIJob(parameters: IGenerativeAIRatingCreateJobParameters): IGenerativeAIRatingJob;
    createAIJob(parameters: IGenerativeAIRealtimeSessionCreateCreateJobParameters): IGenerativeAIRealtimeSessionCreateJob;
    createAIJob(parameters: IGenerativeAISpeechCreateCreateJobParameters): IGenerativeAISpeechCreateJob;
    createAIJob(parameters: IGenerativeAIToolCallCreateJobParameters): IGenerativeAIToolCallJob;
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
