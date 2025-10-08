import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
import { IPromptHistory } from '../prompt';
import { IGenerativeAIInferenceTool } from './GenerativeAIInferenceWorkerParameters';
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
     * The thread id.
     */
    threadId: string;
    /**
     * The job id of the job.
     */
    jobId?: string;
    /**
     * The agent id of the job.
     */
    agentId?: string;
    /**
     * The workflow id of the job.
     */
    workflowId?: string;
    /**
     * The prompt to be processed.
     */
    prompt: string;
    /**
     * The instructions for the AI job.
     */
    instructions?: string;
    /**
     * The grammar to use for the AI job.
     */
    grammar?: any;
    /**
     * Reasoning effort for the AI job.
     */
    reasoning?: string;
    /**
     * Verbosity for the AI job.
     */
    verbosity?: string;
    /**
     * The privacy flag for the AI job.
     */
    privacy?: boolean;
    /**
     * The context for the AI job.
     */
    history?: IPromptHistory[];
    /**
     * The model to use for inference.
     */
    model: string;
    /**
     * The temperature for the inference.
     */
    temperature?: number;
    /**
     * The max tokens for the inference.
     */
    maxTokens?: number;
    /**
     * The voice for the inference.
     */
    voice?: string;
    /**
     * The language for the inference.
     */
    language?: string;
    /**
     * The response format for the inference.
     */
    responseFormat?: string;
    /**
     * The timestamp granularities for the inference.
     */
    timestampGranularities?: string;
    /**
     * The duration for the inference.
     */
    duration?: string;
    /**
     * The ratio for the inference.
     */
    ratio?: string;
    /**
     * tools for the AI job.
     */
    tools?: IGenerativeAIInferenceTool[];
    /**
     * The internal context used by the AI job.
     */
    internalContext?: {
        [key: string]: string;
    };
}
