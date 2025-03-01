import { IGenerativeAIJob } from '../generic';
import { IGenerativeAICollectionCreateResult } from './GenerativeAICollectionCreateResult';

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
  run: () => Promise<IGenerativeAICollectionCreateResult>;
}
