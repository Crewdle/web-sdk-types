import { GenerativeAIJobType } from '../../union-types';
/**
 * AI worker connector parameters Interface
 * @category AI
 */
export interface IGenerativeAIWorkerConnectorParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType;
}
