import { IDataStream } from '../core/stream';
import { ObjectDescriptor, Payload } from '.';
import { StorageEvent } from './event';

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
   * @param callback The callback function.
   */
  subscribe(callback: (data: StorageEvent) => void): void;

  /**
   * Unsubscribe from the bucket.
   */
  unsubscribe(): void;

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
   * @returns The object.
   */
  get(path: string): Promise<File>;

  /**
   * List the objects and folders of the bucket.
   * @param path The path of the folder.
   * @param recursive Whether to list the objects and folders recursively.
   * @returns The list of objects and folders.
   */
  list(path: string, recursive?: boolean): Promise<ObjectDescriptor[]>;
}
