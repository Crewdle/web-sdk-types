/**
 * Interface for a file connector.
 */
export interface IGenerativeAIFileConnector {
  /**
   * Write a file.
   */
  writeFile(file: File): Promise<string>;

  /**
   * Delete a file.
   */
  deleteFile(fileId: string): Promise<void>;
}
