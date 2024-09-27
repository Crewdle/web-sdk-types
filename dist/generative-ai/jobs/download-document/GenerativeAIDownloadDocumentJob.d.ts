import { IGenerativeAIDownloadDocumentResult } from './GenerativeAIDownloadDocumentResult';
/**
 * Represents bounded download document job ready to be executed.
 * @category AI
 */
export interface IGenerativeAIDownloadDocumentJob {
    /**
     * The job ID.
     */
    id: string;
    /**
     * The object store id of the document to download.
     */
    objectStoreId: string;
    /**
     * The path of the document to download.
     */
    documentPath: string;
    /**
     * Run the download document job.
     * @returns A promise that resolves with the result.
     */
    download: () => Promise<IGenerativeAIDownloadDocumentResult>;
}
