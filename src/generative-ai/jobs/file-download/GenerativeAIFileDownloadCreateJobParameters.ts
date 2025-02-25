import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a download document job
 * @category AI
 */
export interface IGenerativeAIFileDownloadCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.FileDownload;

  /**
   * The collection id of the document to download.
   */
  collectionId: string;

  /**
   * The path of the document to download.
   */
  documentPath: string;
}
