import { IValueType, IKeyValueDatabaseTableConnector } from '.';
/**
 * The key-value database connector interface.
 * @category Connector
 */
export interface IKeyValueDatabaseConnector {
    /**
     * Open the database and run a migration on it if necessary.
     */
    open(): Promise<void>;
    /**
     * Close the database.
     */
    close(): void;
    /**
     * Check if a table exists in the database.
     * @returns True if the table exists, false otherwise.
     */
    hasTable(tableName: string): boolean;
    /**
     * Create a table in the database.
     * @param tableName The name of the table to create.
     */
    createTable(tableName: string): void;
    /**
     * Get the table connector for a table in the database.
     * @param tableName The name of the table to get the connector for.
     */
    getTableConnector<T extends IValueType>(tableName: string): IKeyValueDatabaseTableConnector<T>;
}
