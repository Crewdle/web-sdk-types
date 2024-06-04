/**
 * Options for the list function on an Object Store Bucket
 * @category Object Storage
 */
export interface IObjectStoreListOptions {
    /**
     * List folders recursively.
     */
    recursive?: boolean;
    /**
     * List files that are not synced with the object store.
     * i.e. the content of the file is not available.
     */
    includeSyncingFiles: boolean;
}
