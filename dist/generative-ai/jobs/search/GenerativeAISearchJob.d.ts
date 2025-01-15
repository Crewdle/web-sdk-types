import { ISearchResult } from '../../search';
import { IGenerativeAIJob } from '../generic';
/**
 * AI search job Interface
 * @category AI
 */
export interface IGenerativeAISearchJob extends IGenerativeAIJob {
    /**
     * The job ID.
     */
    id: string;
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
    search: () => Promise<ISearchResult[]>;
}
