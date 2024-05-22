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
export declare enum JobType {
    AI = 0,
    Other = 1
}
/**
 * JobStatus Enum
 * Represents the status of a job.
 */
export declare enum JobStatus {
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
    Failed = "Failed"
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
