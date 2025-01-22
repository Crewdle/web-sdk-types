import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic/GenerativeAICreateJobParameters';
/**
 * AI search job parameters Interface
 * @category AI
 */
export interface IGenerativeAISearchCreateJobParameters extends IGenerativeAICreateJobParameters {
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
