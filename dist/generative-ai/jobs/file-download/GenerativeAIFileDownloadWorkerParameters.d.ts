import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';
/**
 * AI download document job parameters Interface
 * @category AI
 */
export interface IGenerativeAIFileDownloadWorkerParameters extends IGenerativeAIWorkerParameters {
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
