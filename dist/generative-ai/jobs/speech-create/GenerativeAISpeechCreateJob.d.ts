import { IGenerativeAIJob } from '../generic';
import { IGenerativeAISpeechCreateResult } from './GenerativeAISpeechCreateResult';
/**
 * Represents the parameters to create a speech create job
 * @category AI
 */
export interface IGenerativeAISpeechCreateJob extends IGenerativeAIJob {
    /**
     * The workflow ID.
     */
    text: string;
    /**
     * The voice to use.
     */
    voice: string;
    /**
     * The model to use.
     */
    model: string;
    /**
     * The instructions to use.
     */
    instructions?: string;
    /**
     * Runs the job.
     * @returns A promise that resolves with the result of the job.
     */
    run: () => Promise<IGenerativeAISpeechCreateResult>;
}
