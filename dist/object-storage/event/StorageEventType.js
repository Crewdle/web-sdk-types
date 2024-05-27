/**
 * The file store event type enum.
 * @category Object Storage
 */
export var StorageEventType;
(function (StorageEventType) {
    /**
       * The sync complete event.
       */
    StorageEventType["SyncComplete"] = "sync-complete";
    /**
     * The file write event.
     */
    StorageEventType["FileWrite"] = "file-write";
    /**
     * The file delete event.
     */
    StorageEventType["FileDelete"] = "file-delete";
    /**
     * The file move event.
     */
    StorageEventType["FileMove"] = "file-move";
    /**
     * The folder create event.
     */
    StorageEventType["FolderCreate"] = "folder-create";
    /**
     * The folder delete event.
     */
    StorageEventType["FolderDelete"] = "folder-delete";
    /**
     * The folder move event.
     */
    StorageEventType["FolderMove"] = "folder-move";
})(StorageEventType || (StorageEventType = {}));
