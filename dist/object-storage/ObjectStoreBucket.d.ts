import { IDataStream } from '../core/stream';
import { IFile, IFileOptions, ObjectDescriptor, Payload } from '.';
import { StorageEvent } from './event';
import { IObjectStoreListOptions } from './ObjectStoreListOptions';
/**
 * The object store bucket interface.
 * @category Object Storage
 */
export interface IObjectStoreBucket extends IDataStream {
    /**
     * Get the name of the bucket.
     */
    getName(): string;
    /**
     * Get the owner ID of the bucket.
     */
    getOwnerId(): string;
    /**
     * Close the bucket.
     */
    close(): void;
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
    /**
     * Publish an action to the bucket.
     * @param payload The object store payload.
     * @returns A promise that resolves when the action is published.
     */
    publish(payload: Payload): Promise<void>;
    /**
     * Unpublish an object from the bucket. It also permanently deletes the object.
     * @param path The path of the object.
     * @returns A promise that resolves when the object is unpublished.
     */
    unpublish(path: string): Promise<void>;
    /**
     * Get an object from the bucket.
     * @param path The path of the object.
     * @param options The optional options for getting the object.
     * @returns The object.
     */
    get(path: string, options?: IFileOptions): Promise<IFile>;
    /**
     * List the objects and folders of the bucket.
     * @param path The path of the folder.
     * @param options The optional options for listing the objects and folders.
     * @returns The list of objects and folders.
     */
    list(path: string, options?: IObjectStoreListOptions): Promise<ObjectDescriptor[]>;
    /**
     * Get the storage size of the bucket.
     * @param path Optionnally takes a path to get the size of a specific object or folder.
     * @returns The storage size.
     */
    getSize(path?: string): Promise<number>;
}
