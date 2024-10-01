import { GenerativeAIJobType } from '../../GenerativeAIJobType';
import { IJobParametersGenerativeAI } from '../../job/JobParametersGenerativeAI';
/**
 * Base AI job parameters Interface
 * @category AI
 */
export interface IGenerativeAIWorkerParameters extends IJobParametersGenerativeAI {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType;
}
