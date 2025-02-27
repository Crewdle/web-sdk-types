import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIJobResult } from '../../job/GenerativeAIJobResult';
import { GenerativeAIRatingStatus } from './GenerativeAIRatingStatus';
/**
 * The AI rating result Interface
 * Represents the result of an AI rating.
 * @category AI
 */
export interface IGenerativeAIRatingResult extends IGenerativeAIJobResult {
    /**
     * The rating AI job type.
     */
    type: GenerativeAIJobType.Rating;
    /**
     * The status of the rating.
     */
    status: GenerativeAIRatingStatus;
}
