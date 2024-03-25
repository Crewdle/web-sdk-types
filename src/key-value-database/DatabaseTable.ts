import { IDatabaseTableQuery, ValueTypeOmitId, IValueType, IDatabaseTableEvent, IQueryBuilder } from '.';

/**
 * Interface for a key-value database table.
 * @category Key-Value Database
 */
export interface IDatabaseTable<T extends IValueType> {
  /**
   * Get the value for a key.
   * @param key The key to get the value for.
   * @returns A promise that resolves with the value for the key.
   */
  get(key: string): Promise<T | undefined>;

  /**
   * Set the value for a key.
   * @param key The key to set the value for.
   * @param value The value to set for the key. It must be {@link https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects | serializable }.
   * @returns A promise that resolves with the value set.
   */
  set(key: string, value: ValueTypeOmitId<T>): Promise<T>;

  /**
   * Add a value to the database.
   * @param value The value to add.
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
   * @returns A promise that resolves when the database has been cleared.
   */
  clear(): Promise<void>;

  /**
   * Get all the values in the database.
   * @param query The query to use to filter the values.
   * If no query is provided, all the values in the database are returned.
   * The query can either be a {@link IDatabaseTableQuery} or a {@link QueryBuilder}.
   * @returns A promise that resolves with all the values in the database.
   */
  list(query?: IDatabaseTableQuery | IQueryBuilder): Promise<T[]>;

  /**
   * Count the number of keys in the database.
   * @param query The query to use to filter the keys.
   * If no query is provided, all the keys in the database are counted.
   * The query can either be a {@link IDatabaseTableQuery} or a {@link QueryBuilder}.
   * @returns A promise that resolves with the number of keys in the database.
   */
  count(query?: IDatabaseTableQuery | IQueryBuilder): Promise<number>;

  /**
   * Subscribe to changes in the database table.
   * @params callback The callback to call when the database table changes.
   */
  subscribe(callback: (event: IDatabaseTableEvent<T>) => void): void;

  /**
   * Unsubscribe from changes in the database table.
   */
  unsubscribe(): void;
}
