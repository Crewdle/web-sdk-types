import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIFileIngestResult } from './GenerativeAIFileIngestResult';
/**
 * Represents bounded file ingest job ready to be executed
 * @category AI
 */
export interface IGenerativeAIFileIngestJob extends IGenerativeAIJob {
    /**
     * The collection id of the file to ingest.
     */
    collectionId: string;
    /**
     * The name of the file to ingest.
     */
    fileName: string;
    /**
     * The file content to ingest.
     */
    content: string;
    /**
     * Run the file ingest job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<IGenerativeAIFileIngestResult>;
}
