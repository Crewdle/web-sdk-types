import { IReadableStream } from './ReadableStream';

/**
 * Represents a file in the object storage.
 * @category Object Storage
 */
export interface IFile {
  /**
   * The name of the file.
   */
  name: string;

  /**
   * The size of the file in bytes.
   */
  size: number;

  /**
   * The MIME type of the file.
   */
  type: string;

  /**
   * The last modified timestamp of the file.
   */
  lastModified: number;

  /**
   * Returns a promise that resolves to an ArrayBuffer containing the file's data.
   */
  arrayBuffer(): Promise<ArrayBuffer>;

  /**
   * Returns a promise that resolves to a string containing the file's data.
   */
  text(): Promise<string>;

  /**
   * Returns a readable stream for streaming the file's data.
   */
  stream(): IReadableStream;

  /**
   * Returns a new Blob object that contains a subset of the file's data.
   * @param start - The start position (inclusive) of the subset. Defaults to 0.
   * @param end - The end position (exclusive) of the subset. Defaults to the end of the file.
   * @param contentType - The MIME type of the subset. Defaults to the original file's type.
   * @returns A Blob object representing the subset of the file's data.
   */
  slice(start?: number, end?: number, contentType?: string): Blob;
}
