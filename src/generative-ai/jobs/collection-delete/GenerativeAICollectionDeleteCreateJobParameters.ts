import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a collection delete job
 * @category AI
 */
export interface IGenerativeAICollectionDeleteCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.CollectionDelete;

  /**
   * The collection id to delete.
   */
  collectionId: string;
}
