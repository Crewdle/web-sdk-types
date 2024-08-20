import { ISearchResult } from '../ai';
/**
 * The vector database connector interface.
 * @category Connector
 */
export interface IVectorDatabaseConnector {
    /**
     * Search for the k nearest vectors.
     * @param vector The vector to search for.
     * @param k The number of nearest vectors to return.
     * @param minRelevance The minimum relevance of the vectors.
     * @param contentSize The size of the content to return (vector +/- contentSize, default 0).
     * @returns An array of search results.
     */
    search(vector: number[], k: number, minRelevance?: number, contentSize?: number): ISearchResult[];
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
    /**
     * Get the content of the database.
     * @returns The content of the database.
     */
    getBuffer(): ArrayBuffer;
}
