/**
 * The key-value database migration handle interface.
 * @category Key-Value Database
 */
export interface IKeyValueDatabaseMigrationHandle {
    /**
     * Get all the tables in the database.
     * @returns An array with the names of all the tables in the database.
     */
    getTables(): string[];
    /**
     * Check if a table exists in the database.
     * @param tableName The name of the table to check.
     * @returns True if the table exists, false otherwise.
     */
    hasTable(tableName: string): boolean;
    /**
     * Create a table in the database.
     * @param tableName The name of the table to create.
     */
    createTable(tableName: string): void;
    /**
     * Delete a table from the database.
     * @param tableName The name of the table to delete.
     */
    deleteTable(tableName: string): void;
    /**
     * Get all the indexes for a table in the database.
     * @param tableName The name of the table to get the indexes for.
     * @returns An array with the names of all the indexes in the table.
     */
    getIndexes(tableName: string): string[];
    /**
     * Check if an index exists in a table in the database.
     * @param tableName The name of the table to check the index in.
     * @param indexKeyPath The key path of the index to check.
     * @returns True if the index exists, false otherwise.
     */
    hasIndex(tableName: string, indexKeyPath: string): boolean;
    /**
     * Create an index in a table in the database.
     * @param tableName The name of the table to create the index in.
     * @param indexKeyPath The key path of the index to create.
     */
    createIndex(tableName: string, indexKeyPath: string): void;
    /**
     * Delete an index from a table in the database.
     * @param tableName The name of the table to delete the index from.
     * @param indexKeyPath The key path of the index to delete.
     */
    deleteIndex(tableName: string, indexKeyPath: string): void;
}
