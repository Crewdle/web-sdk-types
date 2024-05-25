export interface IVectorDatabaseConnector {
    search(vector: number[], k: number): number[];
    insert(vectors: number[][]): void;
}
