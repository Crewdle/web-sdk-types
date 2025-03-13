import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';
/**
 * Represents the parameters to delete a collection
 * @category AI
 */
export interface IGenerativeAICollectionDeleteWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.CollectionDelete;
    /**
     * The collection id to delete.
     */
    collectionId: string;
}
