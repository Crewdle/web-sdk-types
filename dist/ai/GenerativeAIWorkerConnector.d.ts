import { IJobRequest, IJobWorkerConnector, JobResponse } from '../job';
import { IJobParametersAI, IJobResultAI } from './GenerativeAI';
/**
 * The generative AI worker connector interface.
 * @category Connector
 */
export interface IGenerativeAIWorkerConnector extends IJobWorkerConnector<IJobParametersAI, IJobResultAI> {
    /**
     * Initialize the machine learning model.
     * @param llmModel The path to the LLM model.
     * @param similarityModel The path to the similarity model.
     * @returns A promise that resolves when the model has been initialized.
     */
    initialize(llmModel?: string, similarityModel?: string): Promise<void>;
    /**
     * Add content to the machine learning model.
     * @param name The name of the content.
     * @param content The content to add.
     * @returns A promise that resolves when the content has been added.
     */
    addContent(name: string, content: string): Promise<void>;
    /**
     * Remove content from the machine learning model.
     * @param name The name of the content.
     */
    removeContent(name: string): void;
    /**
     * Process a job.
     * @param job The job to process.
     * @returns A promise that resolves with the job result.
     */
    processJob(job: IJobRequest<IJobParametersAI>): Promise<JobResponse<IJobResultAI>>;
    /**
     * Stream a job.
     * @param job The job to stream.
     * @returns An async generator that yields the job result.
     */
    processJobStream(job: IJobRequest<IJobParametersAI>): AsyncGenerator<JobResponse<IJobResultAI>>;
}
