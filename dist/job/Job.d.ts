/**
 * Base IJobParameters Interface
 * Allows providing parameters specific to the job type.
 * @ignore
 */
export interface IJobParameters {
}
/**
 * Job request Interface
 * Represents a job to be executed by the JobService.
 * @ignore
 */
export interface IJobRequest<T extends IJobParameters> {
    /**
     * The ID of the job.
     */
    id: string;
    /**
     * The parameters of the job.
     */
    parameters: T;
    /**
    * The status of the job.
    */
    status?: JobStatus;
    /**
     * The type of the job.
     */
    jobType: JobType;
}
/**
 * JobType Enum
 * Represents the type of a job.
 * @ignore
 */
export declare enum JobType {
    /**
     * The job is expected to return a Promise with a result.
     */
    Job = "job",
    /**
     * The job is expected to return a stream iterator with results.
     */
    JobStream = "job-stream"
}
/**
 * JobStatus Enum
 * Represents the status of a job.
 * @ignore
 */
export declare enum JobStatus {
    /**
     * The job is pending.
     */
    Pending = "pending",
    /**
     * The job is processing.
     */
    Processing = "processing",
    /**
     * The job has partial results.
     */
    Partial = "partial",
    /**
     * The job is completed.
     */
    Completed = "completed",
    /**
     * The job has failed.
     */
    Failed = "failed"
}
/**
 * Base job result Interface
 * Represents the result of a job.
 * @ignore
 */
export interface IJobResult {
}
/**
 * Job response Interface
 * Represents the response from a job.
 * @ignore
 */
export interface IJobResultResponse<T extends IJobResult> {
    /**
     * The ID of the job.
     */
    id: string;
    /**
     * The status of the job.
     */
    status: JobStatus.Partial | JobStatus.Completed;
    /**
     * The result of the job.
     */
    result: T;
}
/**
 * Job failed response Interface
 * Represents a failed job response.
 * @ignore
 */
export interface IJobFailedResponse {
    /**
     * The ID of the job.
     */
    id: string;
    /**
     * The status of the job.
     */
    status: JobStatus.Failed;
    /**
     * The error message.
     */
    message: string;
}
/**
 * Job response type
 * Represents the response type from a job.
 * @ignore
 */
export type JobResponse<T extends IJobResult> = IJobResultResponse<T> | IJobFailedResponse;
