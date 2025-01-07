import { IQueryFileOptions } from './QueryFileOptions';

/**
 * Interface for the QueryFileConnector.
 * @category Connector
 */
export interface IQueryFileConnector {
  /**
   * Executes a query.
   * @param fileContent The content of the file.
   * @param query The query to execute.
   * @param options The options for the query.
   * @returns A promise that resolves with the result of the query.
   */
  executeQuery(fileContent: string, query: string, options: IQueryFileOptions): Promise<string>;
}
