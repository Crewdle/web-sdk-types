import { IFileHandle, IObjectHandle } from '.';

/**
 * The folder handle interface.
 * @category Object Storage
 */
export interface IFolderHandle {
  /**
   * An async iterator that allows iterating over the entries in the folder.
   */
  [Symbol.asyncIterator](): AsyncIterableIterator<[string, IObjectHandle]>;

  /**
   * An async iterator that allows iterating over the entries in the folder.
   */
  entries(): AsyncIterableIterator<[string, IObjectHandle]>;

  /**
   * An async iterator that allows iterating over the keys in the folder.
   */
  keys(): AsyncIterableIterator<string>;

  /**
   * An async iterator that allows iterating over the values in the folder.
   */
  values(): AsyncIterableIterator<IObjectHandle>;

  /**
   * Gets the file handle.
   * @param name The name of the file.
   * @returns A promise that resolves with the file handle.
   */
  getFileHandle(name: string): Promise<IFileHandle>;
}
