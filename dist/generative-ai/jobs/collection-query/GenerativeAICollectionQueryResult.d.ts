import { ISearchResult } from '../../search';
import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
/**
 * The AI collection query result Interface
 * Represents the result of an AI collection query.
 * @category AI
 */
export interface IGenerativeAICollectionQueryResult extends IGenerativeAIJobResult {
    /**
     * The collection delete AI job type.
     */
    type: GenerativeAIJobType.CollectionQuery;
    /**
     * The search result.
     */
    results: ISearchResult[];
}
