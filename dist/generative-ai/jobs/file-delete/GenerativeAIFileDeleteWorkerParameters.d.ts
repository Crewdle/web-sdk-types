import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';
/**
 * Parameters for the File Delete worker.
 * @category AI
 */
export interface IGenerativeAIFileDeleteWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.FileDelete;
    /**
     * The collection id of the file to delete.
     */
    collectionId: string;
    /**
     * The file id of the file to delete.
     */
    fileId: string;
}
