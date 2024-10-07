import { IFile, ObjectDescriptor, StorageEvent } from '../object-storage';
import { IDataStream } from '../core';
import { IExternalStorageListOptions } from '.';
/**
 * The type of external storage.
 */
export declare enum ExternalStorageType {
    /**
     * SharePoint.
     */
    SharePoint = "sharepoint"
}
/**
 * The interface for the external storage connection.
 * @category External Storage
 */
export interface IExternalStorageConnection extends IDataStream {
    /**
     * Get the name of the database.
     */
    getName(): string;
    /**
     * Get the owner ID of the database.
     */
    getOwnerId(): string;
    /**
     * Close the database.
     */
    close(): void;
    /**
     * Get an object from the bucket.
     * @param path The path of the object.
     * @returns The object.
     */
    get(path: string): Promise<IFile>;
    /**
     * List the objects and folders of the bucket.
     * @param path The path of the folder.
     * @param options The optional options for listing the objects and folders.
     * @returns The list of objects and folders.
     */
    list(path: string, options?: IExternalStorageListOptions): Promise<ObjectDescriptor[]>;
    /**
     * Subscribe to the bucket events.
     * @param label The label of the subscriber.
     * @param callback The callback function.
     */
    subscribe(label: string, callback: (data: StorageEvent) => void): void;
    /**
     * Unsubscribe from the bucket.
     * @param label The label of the subscriber.
     */
    unsubscribe(label: string): void;
}
