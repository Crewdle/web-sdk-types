import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';

/**
 * Represents the parameters to create a file ingest job
 * @category AI
 */
export interface IGenerativeAIFileIngestCreateJobParameters extends IGenerativeAICreateJobParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.FileIngest;

  /**
   * The collection id of the file to ingest.
   */
  collectionId: string;

  /**
   * The path of the file to ingest.
   */
  path: string;
}
