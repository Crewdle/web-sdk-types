import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIFileDownloadResult } from './GenerativeAIFileDownloadResult';


/**
 * Represents bounded download document job ready to be executed.
 * @category AI
 */

export interface IGenerativeAIFileDownloadJob extends IGenerativeAIJob {
  /**
   * The collection id of the document to download.
   */
  collectionId: string;

  /**
   * The path of the document to download.
   */
  documentPath: string;

  /**
   * Run the download document job.
   * @returns A promise that resolves with the result.
   */
  run: () => Promise<IGenerativeAIFileDownloadResult>;
}
