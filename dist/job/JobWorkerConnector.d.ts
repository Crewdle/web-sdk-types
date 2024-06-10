import { IJobParameters, IJobRequest, IJobResult, JobResponse } from './Job';
/**
 * The Job Worker Connector interface.
 * @ignore
 */
export interface IJobWorkerConnector<T extends IJobParameters, U extends IJobResult> {
    /**
     * Process a job.
     * @param job The job to process.
     */
    processJob(job: IJobRequest<T>): Promise<JobResponse<U>>;
    /**
     * Process a job stream.
     * @param job The job to process.
     */
    processJobStream(job: IJobRequest<T>): AsyncGenerator<JobResponse<U>>;
}
