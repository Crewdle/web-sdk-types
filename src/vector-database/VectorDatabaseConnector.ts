import { IIndex, ISearchResult } from '../generative-ai';

/**
 * The vector database connector interface.
 * @category Connector
 */
export interface IVectorDatabaseConnector {
  /**
   * Search for the k nearest vectors.
   * @param vector The vector to search for.
   * @param k The number of nearest vectors to return.
   * @param minRelevance The minimum relevance of the vectors (default 0).
   * @param contentSize The size of the content to return (content +/- contentSize, default 0).
   * @returns An array of search results.
   */
  search(vector: number[], k: number, minRelevance?: number, contentSize?: number): ISearchResult[];

  /**
   * Insert vectors into the database.
   * @param name The name of the content.
   * @param content The content.
   * @param index The index of the vectors.
   * @param vectors The vectors to insert.
   * @param transactionId The transaction ID.
   */
  insert(name: string, content: string, index: IIndex[], vectors: number[][], transactionId: string): void;

  /**
   * Remove vectors from the database.
   * @param name The name of the content.
   * @param transactionId The transaction ID.
   */
  remove(name: string, transactionId: string): void;

  /**
   * Get the content of the database.
   * @returns The content of the database.
   */
  getBuffer(): ArrayBuffer;
}
