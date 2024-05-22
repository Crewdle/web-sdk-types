import { IDataStream } from '../core/stream';
import { IJob, JobParameters } from './Job';

export interface IJobService extends IDataStream {
  /**
   * Create a new job.
   * @param jobId The ID of the job.
   * @param parameters The parameters of the job.
   */
  createJob(jobId: string, parameters: JobParameters): Promise<void>;

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
}

