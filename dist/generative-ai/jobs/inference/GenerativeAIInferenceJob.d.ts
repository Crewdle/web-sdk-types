import { IGenerativeAIJob } from '../generic';
/**
 * Represents bounded inference job ready to be executed
 * @category AI
 */
export interface IGenerativeAIInferenceJob extends IGenerativeAIJob {
    /**
     * The model of the inference job.
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
    /**
     * Run the inference job.
     * @returns A promise that resolves with the result.
     */
    run: () => Promise<any>;
    /**
     * Stream the inference job.
     * @returns A promise that resolves with the result.
     */
    stream: () => AsyncGenerator<any>;
}
