import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIFileListResult } from './GenerativeAIFileListResult';
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
     * The namespace to list files.
     */
    namespace?: string;
    /**
     * Run the file list job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<IGenerativeAIFileListResult>;
}
