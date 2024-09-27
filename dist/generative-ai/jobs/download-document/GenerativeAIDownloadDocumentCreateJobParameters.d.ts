import { GenerativeAIJobType } from '../../GenerativeAIJobType';
/**
 * Represents the parameters to create a download document job
 * @category AI
 */
export interface IGenerativeAIDownloadDocumentCreateJobParameters {
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
