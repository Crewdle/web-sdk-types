import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
/**
 * AI search job parameters Interface
 * @category AI
 */
export interface IGenerativeAICollectionQueryCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.CollectionQuery;
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
}
