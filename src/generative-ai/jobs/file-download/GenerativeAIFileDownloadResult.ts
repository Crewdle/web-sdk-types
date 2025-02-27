import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';

/**
 * The AI download document result Interface
 * @category AI
 */

export interface IGenerativeAIFileDownloadResult extends IGenerativeAIJobResult {
  /**
   * The download document AI job type.
   */
  type: GenerativeAIJobType.FileDownload;

  /**
   * The original file name.
   */
  fileName: string;

  /**
   * The MIME type of the document.
   */
  mimeType: string;

  /**
   * The status of the download.
   */
  document: ArrayBuffer;
}
