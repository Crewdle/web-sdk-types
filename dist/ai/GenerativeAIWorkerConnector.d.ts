import { IJob, IJobWorkerConnector, IJobResult } from '../job';
/**
 * The generative AI worker connector interface.
 * @category Connector
 */
export interface IGenerativeAIWorkerConnector extends IJobWorkerConnector {
    /**
     * Initialize the machine learning model.
     * @param llmModel The path to the LLM model.
     * @param similarityModel The path to the similarity model.
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
     * @returns An async generator that yields the job result.
     */
    processJob(job: IJob): AsyncGenerator<IJobResult>;
}
