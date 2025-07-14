import { IIndex } from '../IIndex';
import { IGenerativeAIFile } from '../jobs';
import { ISearchResult } from '../search';
export declare enum GenerativeAIRagType {
    Pinecone = "pinecone",
    Crewdle = "crewdle"
}
export interface IGenerativeAIRagCollection {
    instanceId: string;
    collectionId: string;
    namespace?: string;
}
/**
 * Generative AI Rag Connector Interface
 * @category AI
 */
export interface IGenerativeAIRagConnector {
    /**
     * Create a collection.
     * @param instanceId The instance id to create the collection.
     * @param collectionId The collection id to create.
     * @returns A promise that resolves when the collection is created.
     */
    createCollection(instanceId: string, collectionId: string): Promise<void>;
    /**
     * Delete a collection.
     * @param instanceId The instance id to delete the collection.
     * @param collectionId The collection id to delete.
     * @param deleteInstance Whether to delete the instance as well.
     * @returns A promise that resolves when the collection is deleted.
     */
    deleteCollection(instanceId: string, collectionId: string, deleteInstance: boolean): Promise<void>;
    /**
     * Query a collection.
     * @param collection The collection to query.
     * @param query The query to run.
     * @param topK The number of results to return.
     * @returns The search results.
     */
    queryCollection(collection: IGenerativeAIRagCollection, query: string | number[], topK: number): Promise<ISearchResult[]>;
    /**
     * Delete a file.
     * @param collection The collection to delete the file.
     * @param fileId The file id to delete.
     * @returns A promise that resolves when the file is deleted.
     */
    deleteFile(collection: IGenerativeAIRagCollection, fileId: string): Promise<void>;
    /**
     * Ingest a file.
     * @param collection The collection to ingest the file.
     * @param fileName The name of the file to ingest.
     * @param content The content of the file to ingest.
     * @returns A promise that resolves when the file is ingested.
     */
    ingestFile(collection: IGenerativeAIRagCollection, fileName: string, content: string | IIndex[]): Promise<void>;
    /**
     * List files in a collection.
     * @param collection The collection to list files.
     * @returns The list of files.
     */
    listFiles(collection: IGenerativeAIRagCollection): Promise<IGenerativeAIFile[]>;
}
