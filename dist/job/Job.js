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
    JobStatus["Pending"] = "Pending";
    /**
     * The job is processing.
     */
    JobStatus["Processing"] = "Processing";
    /**
     * The job is completed.
     */
    JobStatus["Completed"] = "Completed";
    /**
     * The job has failed.
     */
    JobStatus["Failed"] = "Failed";
})(JobStatus || (JobStatus = {}));
