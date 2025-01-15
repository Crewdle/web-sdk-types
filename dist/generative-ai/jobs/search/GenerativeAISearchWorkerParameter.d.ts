import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic/GenerativeAIWorkerParameters';
/**
 * AI search job parameters Interface
 * @category AI
 */
export interface IGenerativeAISearchWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Search;
    /**
     * The query for the search.
     */
    query: string;
    /**
     * The collection id for the search.
     */
    collectionId: string;
}
