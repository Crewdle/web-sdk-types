import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IGenerativeAICreateJobParameters } from '../generic';
/**
 * Represents the parameters to create a workflow job
 * @category AI
 */
export interface IGenerativeAIWorkflowCreateJobParameters extends IGenerativeAICreateJobParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType.Workflow;
}
