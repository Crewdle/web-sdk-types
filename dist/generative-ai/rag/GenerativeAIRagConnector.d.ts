import { IGenerativeAIFile } from '../jobs';
import { ISearchResult } from '../search';
/**
 * Generative AI Rag Connector Interface
 * @category AI
 */
export interface IGenerativeAIRagConnector {
    /**
     * Create a collection.
     * @param collectionId The collection id to create.
     * @returns A promise that resolves when the collection is created.
     */
    createCollection(collectionId: string): Promise<void>;
    /**
     * Delete a collection.
     * @param collectionId The collection id to delete.
     * @returns A promise that resolves when the collection is deleted.
     */
    deleteCollection(collectionId: string): Promise<void>;
    /**
     * Query a collection.
     * @param collectionId The collection id to query.
     * @param query The query to run.
     * @returns The search results.
     */
    queryCollection(collectionId: string, query: string): Promise<ISearchResult[]>;
    /**
     * Delete a file.
     * @param collectionId The collection id of the file to delete.
     * @param fileId The file id to delete.
     * @returns A promise that resolves when the file is deleted.
     */
    deleteFile(collectionId: string, fileId: string): Promise<void>;
    /**
     * Ingest a file.
     * @param collectionId The collection id to ingest the file.
     * @param fileName The name of the file to ingest.
     * @param content The content of the file to ingest.
     * @returns A promise that resolves when the file is ingested.
     */
    ingestFile(collectionId: string, fileName: string, content: string): Promise<void>;
    /**
     * List files in a collection.
     * @param collectionId The collection id to list files.
     * @returns The list of files.
     */
    listFiles(collectionId: string): Promise<IGenerativeAIFile[]>;
}
