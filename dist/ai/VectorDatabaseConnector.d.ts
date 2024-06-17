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
     * @param startingIndex The starting index of the vectors.
     * @returns The labels of the k nearest vectors.
     */
    search(vector: number[], k: number, minRelevance?: number, startingIndex?: number): number[];
    /**
     * Insert vectors into the database.
     * @param vectors The vectors to insert.
     */
    insert(vectors: number[][]): void;
    /**
     * Remove vectors from the database.
     * @param ids The IDs of the vectors to remove.
     */
    remove(ids: number[]): void;
}
