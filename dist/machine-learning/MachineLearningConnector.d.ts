import { IJob, IJobWorkerConnector, IJobResult } from '../job';
/**
 * The machine learning connector interface.
 * @category Connector
 */
export interface IMachineLearningConnector extends IJobWorkerConnector {
    /**
     * Initialize the machine learning model.
     * @param llmModel The path to the LLM model.
     * @param similarityModel The path to the similarity model.
     */
    initialize(llmModel: string, similarityModel: string): Promise<void>;
    /**
     * Add content to the machine learning model.
     * @param content The content to add.
     * @returns A promise that resolves when the content has been added.
     */
    addContent(content: string): Promise<void>;
    /**
     * Process a job.
     * @param job The job to process.
     * @returns An async generator that yields the job result.
     */
    processJob(job: IJob): AsyncGenerator<IJobResult>;
}
