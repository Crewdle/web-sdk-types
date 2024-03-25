import { IDataStream } from '../core/stream';
import { IDatabaseEvent, IDatabaseTable, IValueType } from '.';

/**
 * Interface for a key-value database.
 * @category Key-Value Database
 */
export interface IKeyValueDatabase extends IDataStream {
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

  /**
   * Gets the table with the given name.
   * @param tableName The name of the table to get.
   * @returns The table.
   */
  getTable<T extends IValueType>(tableName: string): IDatabaseTable<T>;

  /**
   * Subscribe to datase events.
   * @param callback The callback to call when a database event is published.
   */
  subscribe(callback: (event: IDatabaseEvent) => void): void;

  /**
   * Unsubscribe from database events.
   */
  unsubscribe(): void;
}
