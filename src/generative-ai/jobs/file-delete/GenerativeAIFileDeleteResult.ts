import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';

/**
 * The AI file delete result Interface
 * Represents the result of an AI file delete.
 * @category AI
 */
export interface IGenerativeAIFileDeleteResult extends IGenerativeAIJobResult {
  /**
   * The file delete AI job type.
   */
  type: GenerativeAIJobType.FileDelete;
}
