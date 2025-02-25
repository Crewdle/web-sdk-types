import { IGenerativeAIJob } from '../generic';
/**
 * Represents bounded file list job ready to be executed
 * @category AI
 */
export interface IGenerativeAIFileListJob extends IGenerativeAIJob {
    /**
     * The collection id of the file to list.
     */
    collectionId: string;
    /**
     * Run the file list job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<void>;
}
