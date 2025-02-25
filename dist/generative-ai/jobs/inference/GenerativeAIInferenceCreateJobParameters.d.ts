import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
/**
 * Represents the parameters to create an inference job
 * @category AI
 */
export interface IGenerativeAIInferenceCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Inference;
    /**
     * The model to use for inference.
     */
    model: string;
    /**
     * The input data for the inference.
     */
    messages: any[];
    /**
     * The temperature for the inference.
     */
    temperature: number;
    /**
     * The max tokens for the inference.
     */
    maxTokens: number;
}
