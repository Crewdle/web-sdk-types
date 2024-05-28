/// <reference types="rx-core" />
/// <reference types="rx-core-binding" />
/// <reference types="rx-lite" />
/// <reference types="rx-lite-aggregates" />
/// <reference types="rx-lite-backpressure" />
/// <reference types="rx-lite-coincidence" />
/// <reference types="rx-lite-experimental" />
/// <reference types="rx-lite-joinpatterns" />
/// <reference types="rx-lite-time" />
import { Observable } from 'rx';
import { IDataStream } from '../core/stream';
import { IJob, IJobResult } from './Job';
export interface IJobDispatcher extends IDataStream {
    /**
     * Create a new job.
     * @param jobId The ID of the job.
     * @param parameters The parameters of the job.
     */
    createJob(job: IJob): Promise<Observable<IJobResult>>;
    /**
     * Get a job by ID.
     * @param id The ID of the job to get.
     * @returns The job.
     */
    getJob(id: string): IJob;
    /**
     * Get all jobs.
     * @returns All jobs.
     */
    getJobs(): IJob[];
    /**
     * Close the Job Dispatcher.
     */
    close(): void;
}
