/**
 * JobType Enum
 * Represents the type of a job.
 * @category Job
 */
export var JobType;
(function (JobType) {
    /**
     * The job is expected to return a Promise with a result.
     */
    JobType["Job"] = "job";
    /**
     * The job is expected to return a stream iterator with results.
     */
    JobType["JobStream"] = "job-stream";
})(JobType || (JobType = {}));
/**
 * JobStatus Enum
 * Represents the status of a job.
 * @category Job
 */
export var JobStatus;
(function (JobStatus) {
    /**
     * The job is pending.
     */
    JobStatus["Pending"] = "pending";
    /**
     * The job is processing.
     */
    JobStatus["Processing"] = "processing";
    /**
     * The job has partial results.
     */
    JobStatus["Partial"] = "partial";
    /**
     * The job is completed.
     */
    JobStatus["Completed"] = "completed";
    /**
     * The job has failed.
     */
    JobStatus["Failed"] = "failed";
})(JobStatus || (JobStatus = {}));
