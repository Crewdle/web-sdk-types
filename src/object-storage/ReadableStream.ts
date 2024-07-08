/**
 * Represents a readable stream that provides a way to read data asynchronously.
 * @category Object Storage
 */
export interface IReadableStream {
  /**
   * Reads the next chunk of data from the stream.
   * @returns A promise that resolves to a Uint8Array containing the data read from the stream, or null if the end of the stream has been reached.
   */
  read(): Promise<Uint8Array | null>;

  /**
   * Closes the stream and releases any resources associated with it.
   * @returns A promise that resolves when the stream is successfully closed.
   */
  close(): Promise<void>;
}
