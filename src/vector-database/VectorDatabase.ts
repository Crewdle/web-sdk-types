import { IDataStream } from '../core';

/**
 * The interface for the vector database.
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
   * @param minRelevance The minimum relevance of the vectors.
   * @param startingIndex The starting index of the vectors.
   * @returns The content of the k nearest vectors.
   */
  search(vector: number[], k: number, minRelevance?: number, startingIndex?: number): string[];

  /**
   * Insert vectors into the database.
   * @param name The name of the content.
   * @param content The content of the vectors.
   * @param vectors The vectors to insert.
   */
  insert(name: string, content: string[], vectors: number[][]): void;

  /**
   * Remove vectors from the database.
   * @param name The name of the content.
   */
  remove(name: string): void;
}
