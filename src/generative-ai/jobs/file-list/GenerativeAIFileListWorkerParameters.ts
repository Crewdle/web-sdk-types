import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * Parameters for the File List worker.
 * @category AI
 */
export interface IGenerativeAIFileListWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.FileList;

  /**
   * The collection id to list files from.
   */
  collectionId: string;

  /**
   * The namespace to list files.
   */
  namespace?: string;
}
