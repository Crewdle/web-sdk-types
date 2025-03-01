import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIFileDeleteResult } from './GenerativeAIFileDeleteResult';
/**
 * Represents bounded delete file job ready to be executed
 * @category AI
 */
export interface IGenerativeAIFileDeleteJob extends IGenerativeAIJob {
    /**
     * The collection id of the file to delete.
     */
    collectionId: string;
    /**
     * The file id of the file to delete.
     */
    fileId: string;
    /**
     * Run the delete file job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<IGenerativeAIFileDeleteResult>;
}
