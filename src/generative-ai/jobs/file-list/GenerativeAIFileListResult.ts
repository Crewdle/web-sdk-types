import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';

/**
 * The AI file Interface
 * Represents a file in the AI file list.
 * @category AI
 */
export interface IGenerativeAIFile {
  /**
   * The file name.
   */
  name: string;

  /**
   * The file id.
   */
  id: string;

  /**
   * The file status.
   */
  status: string;
}

/**
 * The AI file list result Interface
 * Represents the result of an AI file list.
 * @category AI
 */
export interface IGenerativeAIFileListResult extends IGenerativeAIJobResult {
  /**
   * The file list AI job type.
   */
  type: GenerativeAIJobType.FileList;

  /**
   * The list of files.
   */
  files: IGenerativeAIFile[];
}
