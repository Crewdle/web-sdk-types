import { IGenerativeAIJob } from '../generic';
/**
 * Represents bounded delete collection job ready to be executed
 * @category AI
 */
export interface IGenerativeAICollectionDeleteJob extends IGenerativeAIJob {
    /**
     * The collection id to delete.
     */
    collectionId: string;
    /**
     * Run the delete collection job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<void>;
}
