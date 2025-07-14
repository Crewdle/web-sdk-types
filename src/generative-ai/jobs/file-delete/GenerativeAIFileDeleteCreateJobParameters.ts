import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a delete file job
 * @category AI
 */
export interface IGenerativeAIFileDeleteCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.FileDelete;

  /**
   * The collection id of the file to delete.
   */
  collectionId: string;

  /**
   * The namespace to delete the file.
   */
  namespace?: string;

  /**
   * The file id of the file to delete.
   */
  fileId: string;
}
