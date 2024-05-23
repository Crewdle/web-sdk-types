/**
 * IJob Interface
 * Represents a job to be executed by the JobService.
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
 */
export enum JobType {
  AI,
  Other,
}

/**
 * JobStatus Enum
 * Represents the status of a job.
 */
export enum JobStatus {
  /**
   * The job is pending.
   */
  Pending = "Pending",

  /**
   * The job is processing.
   */
  Processing = "Processing",

  /**
   * The job is completed.
   */
  Completed = "Completed",

  /**
   * The job has failed.
   */
  Failed = "Failed",
}

/**
 * Base IJobParameters Interface
 * Allows providing parameters specific to the job type.
 */
export interface IJobParameters {
  jobType: JobType;
}

/**
 * IJobParametersAI Interface
 * Parameters for AI job type.
 */
export interface IJobParametersAI extends IJobParameters {
  jobType: JobType.AI;
  prompt: string;
}

/**
 * JobParameters Type
 * Union of all job parameters interfaces.
 */
export type JobParameters = IJobParametersAI;

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

export interface IJobResultAI {
  jobType: JobType.AI;
  output: string;
}

type JobResult = IJobResultAI;

