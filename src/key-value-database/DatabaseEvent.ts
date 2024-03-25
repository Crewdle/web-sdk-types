/**
 * The supported key-value database events.
 * @category Key-Value Database
 */
export enum DatabaseEvent {
  /**
   * The database synchronization is complete.
   */
  SyncComplete = 'sync-complete'
}

/**
 * Interface for key-value database events.
 * @category Key-Value Database
 */
export interface IDatabaseEvent {
  /**
   * The event type.
   */
  event: DatabaseEvent;
}

