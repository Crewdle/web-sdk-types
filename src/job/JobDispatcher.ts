import type { Observable } from 'rxjs';
import { IDataStream } from '../core/stream';
import { IJobParameters, IJobRequest, IJobResult, JobResponse } from './Job';

/**
 * The Job Dispatcher interface.
 * @category Job
 */
export interface IJobDispatcher<T extends IJobParameters, U extends IJobResult> extends IDataStream {
  /**
   * Create a new job.
   * @param job The job to create.
   */
  createJob(job: IJobRequest<T>): Promise<Observable<JobResponse<U>>>;

  /**
   * Get a job by ID.
   * @param id The ID of the job to get.
   * @returns The job.
   */
  getJob(id: string): IJobRequest<T>;

  /**
   * Get all jobs.
   * @returns All jobs.
   */
  getJobs(): IJobRequest<T>[];

  /**
   * Close the Job Dispatcher.
   */
  close(): void;
}

