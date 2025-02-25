import { IGenerativeAIJob } from '../generic';

/**
 * Represents bounded create collection job ready to be executed
 * @category AI
 */
export interface IGenerativeAICollectionCreateJob extends IGenerativeAIJob {
  /**
   * The collection id of the document to download.
   */
  collectionId: string;

  /**
   * Run the create collection job.
   * @returns A promise that resolves with the result.
   */
  run: () => Promise<void>;
}
