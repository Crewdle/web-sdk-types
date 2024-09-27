import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerConnectorParameters } from '../generic/GenerativeAIWorkerConnectorParameters';
import { IGenerativeAIPromptOptions } from './GenerativeAIPromptOptions';
/**
 * AI prompt worker connector parameters Interface
 * @category AI
 */
export interface IGenerativeAIPromptWorkerConnectorParameters extends IGenerativeAIWorkerConnectorParameters, IGenerativeAIPromptOptions {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Prompt;
    /**
     * The prompt for the AI job.
     */
    prompt: string;
}
