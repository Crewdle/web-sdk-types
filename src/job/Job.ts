/**
 * IJob Interface
 * Represents a job to be executed by the JobService.
 * @ignore
 */
export interface IJob {
  /**
   * The ID of the job.
   */
  id: string;

  /**
   * The parameters of the job.
   */
  parameters: JobParameters;

  /**
  * The status of the job.
  */
  status?: JobStatus;
}

/**
 * JobType Enum
 * Provide this to create a job with a specific type.
 * @ignore
 */
export enum JobType {
  AI,
  Other,
}

/**
 * JobStatus Enum
 * Represents the status of a job.
 * @ignore
 */
export enum JobStatus {
  /**
   * The job is pending.
   */
  Pending = 'pending',

  /**
   * The job is processing.
   */
  Processing = 'processing',

  /**
   * The job has partial results.
   */
  Partial = 'partial',

  /**
   * The job is completed.
   */
  Completed = 'completed',

  /**
   * The job has failed.
   */
  Failed = 'failed',
}

/**
 * Base IJobParameters Interface
 * Allows providing parameters specific to the job type.
 * @ignore
 */
export interface IJobParameters {
  jobType: JobType;
}

/**
 * IJobParametersAI Interface
 * Parameters for AI job type.
 * @ignore
 */
export interface IJobParametersAI extends IJobParameters {
  jobType: JobType.AI;
  prompt: string;
}

/**
 * JobParameters Type
 * Union of all job parameters interfaces.
 * @ignore
 */
export type JobParameters = IJobParametersAI;

/**
 * IJobResult Interface
 * Represents the result of a job.
 * @ignore
 */
export interface IJobResult {
  /**
   * The ID of the job.
   */
  id: string;

  /**
   * The status of the job result.
   */
  status: JobStatus;

  /**
   * The result of the job.
   */
  result: JobResult;
}

/**
 * IJobResultAI Interface
 * Represents the result of an AI job.
 * @ignore
 */
export interface IJobResultAI {
  jobType: JobType.AI;
  output: string;
  index?: number;
}

/**
 * JobResult Type
 * Union of all job result interfaces.
 * @ignore
 */
export type JobResult = IJobResultAI;

