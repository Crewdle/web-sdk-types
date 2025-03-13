import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';

/**
 * The AI collection create result Interface
 * Represents the result of an AI collection create.
 * @category AI
 */
export interface IGenerativeAICollectionCreateResult extends IGenerativeAIJobResult {
  /**
   * The collection create AI job type.
   */
  type: GenerativeAIJobType.CollectionCreate;
}
