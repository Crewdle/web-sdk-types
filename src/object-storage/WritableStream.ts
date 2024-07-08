/**
 * Represents a writable stream.
 * @category Object Storage
 */
export interface IWritableStream {
  /**
   * Writes data to the stream.
   * @param chunk The data to write as an ArrayBuffer.
   */
  write(chunk: ArrayBuffer): Promise<void>;

  /**
   * Closes the stream.
   */
  close(): Promise<void>;
}
