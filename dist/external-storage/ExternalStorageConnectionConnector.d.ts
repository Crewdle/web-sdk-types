import { IFile, ObjectDescriptor, StorageEvent } from '../object-storage';
/**
 * Interface for external storage connection connector.
 * @category Connector
 */
export interface IExternalStorageConnectionConnector {
    /**
     * Gets a file.
     * @param path The path to the file.
     * @returns A promise that resolves with the file.
     */
    get(path: string): Promise<IFile>;
    /**
     * Lists the objects in a folder.
     * @param path The path to the folder.
     * @param recursive Whether to list the objects recursively.
     * @returns A promise that resolves with an array of object descriptors.
     */
    list(path: string, recursive: boolean): Promise<ObjectDescriptor[]>;
    /**
     * Lists the changes in the storage.
     * @returns A promise that resolves with an array of storage events.
     */
    listChanges(): Promise<StorageEvent[]>;
}
