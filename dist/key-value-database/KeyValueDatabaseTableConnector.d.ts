import { IDatabaseTableQuery, IValueType, ValueTypeOmitId } from '.';
/**
 * The key-value database table connector interface.
 * @category Key-Value Database
 */
export interface IKeyValueDatabaseTableConnector<T extends IValueType> {
    /**
     * Get the value for a key.
     * @param key The key to get the value for.
     * @returns A promise that resolves with the value for the key, or undefined if the key was not found.
     */
    get(key: string): Promise<T | undefined>;
    /**
     * Set the value for a key.
     * @param key The key to set the value for.
     * @param value The value to set for the key. It must be a {@link SupportedIndexTypes}.
     */
    set(key: string, value: ValueTypeOmitId<T>): Promise<T>;
    /**
     * Add a value to the database.
     * @param value  The value to add. It must be a {@link SupportedIndexTypes}.
     * @returns A promise that resolves with the value added.
     */
    add(value: ValueTypeOmitId<T>): Promise<T>;
    /**
     * Delete a key.
     * @param key The key to delete.
     * @returns A promise that resolves when the key has been deleted.
     */
    delete(key: string): Promise<void>;
    /**
     * Clear the database.
     * Fires a {@link IDatabaseTableEvent} for each key deleted.
     * @returns A promise that resolves when the database has been cleared.
     */
    clear(): Promise<void>;
    /**
     * Get all the values matching the query in the database.
     * @param query The query to use to filter the values.
     * If no query is provided, all the values in the database are returned.
     * @returns A promise that resolves with all the values matching the query.
     */
    list(query?: IDatabaseTableQuery): Promise<T[]>;
    /**
     * Count the number of keys matching the query in the database.
     * @param query The query to use to filter the keys.
     * If no query is provided, all the keys in the database are counted.
     * @returns A promise that resolves with the number of keys matching the query.
     */
    count(query?: IDatabaseTableQuery): Promise<number>;
    /**
     * Calculate the size of the table.
     * @returns A promise that resolves with the size of the table in bytes.
     */
    calculateSize(): Promise<number>;
}
