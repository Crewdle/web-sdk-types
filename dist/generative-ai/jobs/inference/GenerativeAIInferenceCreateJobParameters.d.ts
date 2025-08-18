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
     * Enable reasoning for the AI job.
     */
    reasoning?: boolean;
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
