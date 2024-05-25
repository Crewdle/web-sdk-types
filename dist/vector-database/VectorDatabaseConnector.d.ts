export interface IVectorDatabaseConnector {
    search(vector: number[]): number[];
    insert(vectors: number[][]): void;
}
