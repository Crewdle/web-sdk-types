import { IGenerativeAIJob } from '../generic';
import { IGenerativeAICollectionQueryResult } from './GenerativeAICollectionQueryResult';

/**
 * AI search job Interface
 * @category AI
 */
export interface IGenerativeAICollectionQueryJob extends IGenerativeAIJob {
  /**
   * The query for the search.
   */
  query: string;

  /**
   * The collection id for the search.
   */
  collectionId: string;

  /**
   * The namespace for the search.
   */
  namespace?: string;

  /**
   * Run the search job.
   * @returns A promise that resolves with the result.
   */
  run: () => Promise<IGenerativeAICollectionQueryResult>;
}
