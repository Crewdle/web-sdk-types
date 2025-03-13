import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * AI realtime session create job parameters Interface
 * @category AI
 */
export interface IGenerativeAIRealtimeSessionCreateWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.RealtimeSessionCreate;

  /**
   * The workflow ID.
   */
  workflowId: string;
}
