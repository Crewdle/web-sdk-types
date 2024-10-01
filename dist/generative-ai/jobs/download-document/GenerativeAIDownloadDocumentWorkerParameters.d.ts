import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic/GenerativeAIWorkerParameters';
/**
 * AI download document job parameters Interface
 * @category AI
 */
export interface IGenerativeAIDownloadDocumentWorkerParameters extends IGenerativeAIWorkerParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.DownloadDocument;
    /**
     * The object store id of the document to download.
     */
    objectStoreId: string;
    /**
     * The path of the document to download.
     */
    documentPath: string;
}
