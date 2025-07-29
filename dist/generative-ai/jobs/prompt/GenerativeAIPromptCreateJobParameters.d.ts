import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
import { IGenerativeAIPromptFile } from './GenerativeAIPromptOptions';
import { IPromptHistory } from './options';
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
     * The workflow id to use for the prompt.
     */
    workflowId: string;
    /**
     * The user id to use for the prompt.
     */
    userId?: string;
    /**
     * The namespace to use for the prompt.
     */
    namespace?: string;
    /**
     * The prompt to be processed.
     */
    prompt: string;
    /**
     * The thread id
     */
    threadId: string;
    /**
     * The job id
     */
    jobId?: string;
    /**
     * The agent id
     */
    agentId?: string;
    /**
     * The context for the AI job.
     */
    history?: IPromptHistory[];
    /**
     * The internal context for the AI job.
     */
    internalContext?: {
        [key: string]: string;
    };
    /**
     * The files that will be used by the LLM.
     */
    files?: IGenerativeAIPromptFile[];
}
