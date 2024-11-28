import { IJobParameters, IJobResult } from './Job';

/**
 * The Job Worker options.
 * @category Job
 */
export interface IJobWorkerOptions {}

/**
 * The Job Worker Connector interface.
 * @category Connector
 */
export interface IJobWorkerConnector<T extends IJobParameters, U extends IJobResult> {
  /**
   * Process a job.
   * @param parameters The job parameters.
   * @param options The job options.
   * @returns A promise that resolves with the job result.
   */
  processJob(parameters: T, options?: IJobWorkerOptions): Promise<U>;

  /**
   * Process a job stream.
   * @param parameters The job parameters.
   * @param options The job options.
   * @returns An async generator that yields job results.
   */
  processJobStream(parameters: T, options?: IJobWorkerOptions): AsyncGenerator<U>;
}
