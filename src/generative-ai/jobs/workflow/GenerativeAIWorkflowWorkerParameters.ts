import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAIWorkerParameters } from '../generic';

/**
 * Represents the parameters to create a workflow job
 * @category AI
 */
export interface IGenerativeAIWorkflowWorkerParameters extends IGenerativeAIWorkerParameters {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType.Workflow;
}
