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
    /**
     * The vendor (account) that owns the collection, set by the SDK from the job — never from a client.
     * Lets per-org stores (S3 Vectors, one index per org) scope every call to the owner's organization,
     * including `shared` ('crewdle') and `dedicated` (collection id) hosting where instanceId is not the vendor.
     * Connectors that don't need it ignore it.
     */
    vendorId?: string;
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
     * @param vendorId The vendor (account) that owns the collection (optional, see IGenerativeAIRagCollection.vendorId).
     * @returns A promise that resolves when the collection is created.
     */
    createCollection(instanceId: string, collectionId: string, vendorId?: string): Promise<void>;
    /**
     * Delete a collection.
     * @param instanceId The instance id to delete the collection.
     * @param collectionId The collection id to delete.
     * @param deleteInstance Whether to delete the instance as well.
     * @param vendorId The vendor (account) that owns the collection (optional, see IGenerativeAIRagCollection.vendorId).
     * @returns A promise that resolves when the collection is deleted.
     */
    deleteCollection(instanceId: string, collectionId: string, deleteInstance: boolean, vendorId?: string): Promise<void>;
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
