import { IGenerativeAIRatingResult, IGenerativeAIDownloadDocumentResult, ISearchResult } from '.';
import { IGenerativeAIDownloadDocumentCreateJobParameters, IGenerativeAIDownloadDocumentJob } from './jobs/download-document';
import { IGenerativeAIPromptCreateJobParameters, IGenerativeAIPromptJob } from './jobs/prompt';
import { IGenerativeAIRatingCreateJobParameters, IGenerativeAIRatingJob } from './jobs/rating';
import { IGenerativeAISearchCreateJobParameters, IGenerativeAISearchJob } from './jobs/search';

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
  createAIJob(parameters: IGenerativeAISearchCreateJobParameters): IGenerativeAISearchJob;

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
   * Search for documents.
   * @param parameters The parameters of the search job.
   * @returns A promise that resolves with the result containing the search results.
   */
  search(parameters: IGenerativeAISearchCreateJobParameters): Promise<ISearchResult[]>;

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
