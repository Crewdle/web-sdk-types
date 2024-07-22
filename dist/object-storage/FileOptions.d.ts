/**
 * Represents the options for reading or writing a file.
 * @category Object Storage
 */
export interface IFileOptions {
    /**
     * Specifies whether encryption should be skipped for the file.
     */
    skipEncryption?: boolean;
    /**
     * Specifies whether the file should be fetched from a URL.
     */
    fetchUrl?: string;
}
