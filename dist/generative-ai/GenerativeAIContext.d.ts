import { IGenerativeAIRatingResult, IGenerativeAIDownloadDocumentResult } from '.';
import { IGenerativeAIDownloadDocumentCreateJobParameters } from './jobs/download-document/GenerativeAIDownloadDocumentCreateJobParameters';
import { IGenerativeAIDownloadDocumentJob } from './jobs/download-document/GenerativeAIDownloadDocumentJob';
import { IGenerativeAIPromptCreateJobParameters } from './jobs/prompt/GenerativeAIPromptCreateJobParameters';
import { IGenerativeAIPromptJob } from './jobs/prompt/GenerativeAIPromptJob';
import { IGenerativeAIRatingCreateJobParameters } from './jobs/rating/GenerativeAIRatingCreateJobParameters';
import { IGenerativeAIRatingJob } from './jobs/rating/GenerativeAIRatingJob';
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
    createAIJob(parameters: IGenerativeAIPromptCreateJobParameters): IGenerativeAIPromptJob;
    createAIJob(parameters: IGenerativeAIRatingCreateJobParameters): IGenerativeAIRatingJob;
    createAIJob(parameters: IGenerativeAIDownloadDocumentCreateJobParameters): IGenerativeAIDownloadDocumentJob;
    /**
     * Rate a prompt.
     * @param parameters The parameters of the rating job.
     * @returns A promise that resolves with the result.
     */
    ratePrompt(parameters: IGenerativeAIRatingCreateJobParameters): Promise<IGenerativeAIRatingResult>;
    /**
     * Download a document.
     * @param documentPath The path of the document to download.
     * @returns A promise that resolves with the result containing the document as an ArrayBuffer.
     */
    downloadDocument(documentPath: string): Promise<IGenerativeAIDownloadDocumentResult>;
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
