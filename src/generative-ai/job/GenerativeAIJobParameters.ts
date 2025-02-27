import { GenerativeAIJobType } from '../GenerativeAIJobType';
import { IJobParameters } from '../../job/Job';
import { IGenerativeAIPromptOptions } from '../jobs/prompt/GenerativeAIPromptOptions';
import { IGenerativeAIRatingOptions } from '../jobs/rating/GenerativeAIRatingOptions';

/**
* The AI job parameters Interface
* Parameters for AI job type.
* @category AI
*/
export interface IGenerativeAIJobParameters extends IJobParameters, IGenerativeAIPromptOptions, IGenerativeAIRatingOptions {
  /**
   * The AI job type.
   */
  type: GenerativeAIJobType;
}
