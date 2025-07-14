import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * Parameters for the File Ingest worker.
 * @category AI
 */
export interface IGenerativeAIFileIngestWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.FileIngest;

  /**
   * The collection id for the file to ingest.
   */
  collectionId: string;

  /**
   * The namespace to ingest the file.
   */
  namespace?: string;

  /**
   * The name of the file to ingest.
   */
  fileName: string;

  /**
   * The file content to ingest.
   */
  content: string;
}
