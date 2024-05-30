/**
 * The vector database connector interface.
 * @category Connector
 */
export interface IVectorDatabaseConnector {
    /**
     * Search for the k nearest vectors.
     * @param vector The vector to search for.
     * @param k The number of nearest vectors to return.
     */
    search(vector: number[], k: number): number[];
    /**
     * Insert vectors into the database.
     * @param vectors The vectors to insert.
     */
    insert(vectors: number[][]): void;
}
