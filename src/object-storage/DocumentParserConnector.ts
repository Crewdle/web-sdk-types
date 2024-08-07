import { IFile } from './File';

export interface IDocumentParserConnector {
  /**
   * Parses a document.
   * @param file The file to parse.
   * @returns A promise that resolves with the parsed document.
   */
  parse(file: IFile): Promise<string>;
}
