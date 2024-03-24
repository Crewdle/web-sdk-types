/**
 * The file handle interface.
 * @category Object Storage
 */
export interface IFileHandle {
    /**
     * Gets the file.
     * @returns A promise that resolves with the file.
     */
    getFile(): Promise<File>;
}
