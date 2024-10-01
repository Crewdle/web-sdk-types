import { IDataStream } from '../core';
/**
 * The type of external storage.
 */
export declare enum ExternalStorageType {
    /**
     * SharePoint.
     */
    SharePoint = "sharepoint"
}
/**
 * The interface for the external storage connection.
 * @category External Storage
 */
export interface IExternalStorageConnection extends IDataStream {
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
}
