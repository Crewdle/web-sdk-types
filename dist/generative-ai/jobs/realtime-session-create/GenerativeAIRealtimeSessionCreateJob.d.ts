import { IGenerativeAIJob } from '../generic';
import { IGenerativeAIRealtimeSessionCreateResult } from './GenerativeAIRealtimeSessionCreateResult';
/**
 * Represents the parameters to create a realtime session create job
 * @category AI
 */
export interface IGenerativeAIRealtimeSessionCreateJob extends IGenerativeAIJob {
    /**
     * The workflow ID.
     */
    workflowId: string;
    /**
     * Runs the job.
     * @returns A promise that resolves with the result of the job.
     */
    run: () => Promise<IGenerativeAIRealtimeSessionCreateResult>;
}
