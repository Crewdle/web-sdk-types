import { IFile } from './File';

export interface IDocumentParserConnector {
  /**
   * Parses a document.
   * @param file The file to parse.
   * @returns A promise that resolves with the parsed document.
   */
  parse(file: IFile): Promise<string>;

  /**
   * Get the supported file types.
   * @returns The supported file types.
   */
  getSupportedFileTypes(): string[];

  /**
   * Check if the connector supports a file.
   * @param file The file to check.
   * @returns Whether the connector supports the file.
   */
  supports(file: IFile): boolean;
}
