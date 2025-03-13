import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
/**
 * The AI collection delete result Interface
 * Represents the result of an AI collection delete.
 * @category AI
 */
export interface IGenerativeAICollectionDeleteResult extends IGenerativeAIJobResult {
    /**
     * The collection delete AI job type.
     */
    type: GenerativeAIJobType.CollectionDelete;
}
