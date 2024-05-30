import type { Observable } from 'rxjs';
import { IDataStream } from '../core/stream';
import { IJob, IJobResult } from './Job';

/**
 * The Job Dispatcher interface.
 * @ignore
 */
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

  // TODO jobs - Add close
  /**
   * Close the Job Dispatcher.
   */
  close(): void;
}

