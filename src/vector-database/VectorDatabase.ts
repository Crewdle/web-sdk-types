import { IIndex, ISearchResult } from '../generative-ai';
import { IDataStream } from '../core';

/**
 * The interface for the vector database.
 * @category Vector Database
 */
export interface IVectorDatabase extends IDataStream {
  /**
   * Get the name of the database.
   */
  getName(): string;

  /**
   * Get the owner ID of the database.
   */
  getOwnerId(): string;

  /**
   * Close the database.
   */
  close(): void;

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
   */
  insert(name: string, content: string, index: IIndex[], vectors: number[][]): void;

  /**
   * Remove vectors from the database.
   * @param name The name of the content.
   */
  remove(name: string): void;

  /**
   * Save the database to disk.
   * @param version The version of the data collection.
   */
  saveToDisk(version: string): void;

  /**
   * Load the database from disk.
   * @param version The version of the data collection.
   */
  loadFromDisk(version: string): void;
}
