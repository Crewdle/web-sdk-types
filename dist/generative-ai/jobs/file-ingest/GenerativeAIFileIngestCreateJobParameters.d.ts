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
     * The name of the file to ingest.
     */
    fileName: string;
    /**
     * The file content to ingest.
     */
    content: string;
}
