import { ISearchResult } from '../../search';
import { IGenerativeAIJob } from '../generic';
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
     * Run the search job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<ISearchResult[]>;
}
