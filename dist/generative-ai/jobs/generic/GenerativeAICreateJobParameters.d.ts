import { IGenerativeAIOptions } from './GenerativeAIOptions';
/**
 * The parameters for creating a generative AI job.
 * @category AI
 */
export interface IGenerativeAICreateJobParameters {
    /**
     * The vendor id of the job.
     */
    vendorId: string;
    /**
     * The options for the job.
     */
    options?: IGenerativeAIOptions;
}
