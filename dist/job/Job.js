/**
 * JobType Enum
 * Provide this to create a job with a specific type.
 * @ignore
 */
export var JobType;
(function (JobType) {
    JobType[JobType["AI"] = 0] = "AI";
    JobType[JobType["Other"] = 1] = "Other";
})(JobType || (JobType = {}));
/**
 * JobStatus Enum
 * Represents the status of a job.
 * @ignore
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
