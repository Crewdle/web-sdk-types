import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a collection create job
 * @category AI
 */
export interface IGenerativeAICollectionCreateCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.CollectionCreate;

  /**
   * The collection id to create.
   */
  collectionId: string;
}
