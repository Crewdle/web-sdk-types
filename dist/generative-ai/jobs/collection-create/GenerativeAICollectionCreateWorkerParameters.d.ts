import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';
/**
 * AI collection create job parameters Interface
 * @category AI
 */
export interface IGenerativeAICollectionCreateWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.CollectionCreate;
    /**
     * The collection id to create.
     */
    collectionId: string;
}
