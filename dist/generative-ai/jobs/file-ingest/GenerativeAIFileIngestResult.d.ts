import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
/**
 * The AI file ingest result Interface
 * Represents the result of an AI file ingest.
 * @category AI
 */
export interface IGenerativeAIFileIngestResult extends IGenerativeAIJobResult {
    /**
     * The file ingest AI job type.
     */
    type: GenerativeAIJobType.FileIngest;
}
