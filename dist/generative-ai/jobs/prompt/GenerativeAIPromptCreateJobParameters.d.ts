import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
import { IGenerativeAIPromptOptions } from './GenerativeAIPromptOptions';
/**
 * Represents the parameters of a prompt job.
 * @category AI
 */
export interface IGenerativeAIPromptCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The prompt job type.
     */
    type: GenerativeAIJobType.Prompt;
    /**
     * The prompt to be processed.
     */
    prompt: string;
    /**
     * The options for the prompt.
     */
    options?: IGenerativeAIPromptOptions;
}
