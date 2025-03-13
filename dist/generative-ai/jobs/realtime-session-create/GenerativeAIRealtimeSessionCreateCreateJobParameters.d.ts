import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
/**
 * Represents the parameters to create a realtime session create job
 * @category AI
 */
export interface IGenerativeAIRealtimeSessionCreateCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.RealtimeSessionCreate;
    /**
     * The workflow ID associated with the message.
     */
    workflowId: string;
}
