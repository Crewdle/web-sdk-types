import { IGenerativeAIJob } from '../generic';
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
     * The path of the file to ingest.
     */
    path: string;
    /**
     * Run the file ingest job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<void>;
}
