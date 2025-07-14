import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a file list job
 * @category AI
 */
export interface IGenerativeAIFileListCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.FileList;

  /**
   * The collection id of the file to list.
   */
  collectionId: string;

  /**
   * The namespace to list files.
   */
  namespace?: string;
}
