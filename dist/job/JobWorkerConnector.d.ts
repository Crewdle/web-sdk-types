import { IJob, IJobResult } from './Job';
/**
 * The Job Worker Connector interface.
 * @ignore
 */
export interface IJobWorkerConnector {
    /**
     * Process a job.
     * @param job The job to process.
     */
    processJob(job: IJob): AsyncGenerator<IJobResult>;
}
