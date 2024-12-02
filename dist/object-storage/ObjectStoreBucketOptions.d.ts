/**
 * Options for creating an Object Store bucket.
 * @category Object Storage
 */
export interface IObjectStoreBucketOptions {
    /**
     * Whether to sync the content of the bucket.
     */
    syncContent?: boolean;
    /**
     * Whether the bucket is standalone.
     */
    standalone?: boolean;
}
