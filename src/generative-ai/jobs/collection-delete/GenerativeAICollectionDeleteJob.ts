import { IGenerativeAIJob } from '../generic';
import { IGenerativeAICollectionDeleteResult } from './GenerativeAICollectionDeleteResult';

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
  run: () => Promise<IGenerativeAICollectionDeleteResult>;
}
