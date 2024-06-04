/**
 * File status enum
 */
export var FileStatus;
(function (FileStatus) {
    /**
     * The file is pending, the content is not available.
     */
    FileStatus["Pending"] = "pending";
    /**
     * The file is syncing, the content is out of date.
     */
    FileStatus["Syncing"] = "syncing";
    /**
     * The file is synced, the content is available.
     */
    FileStatus["Synced"] = "synced";
})(FileStatus || (FileStatus = {}));
