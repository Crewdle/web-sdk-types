import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IJobResultGenerativeAI } from '../../job/JobResultGenerativeAI';
/**
 * The AI download document result Interface
 * @category AI
 */
export interface IGenerativeAIDownloadDocumentResult extends IJobResultGenerativeAI {
    /**
     * The download document AI job type.
     */
    type: GenerativeAIJobType.DownloadDocument;
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
