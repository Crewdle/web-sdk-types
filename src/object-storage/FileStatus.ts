/**
 * File status enum
 * @category Object Storage
 */
export enum FileStatus {
  /**
   * The file is pending, the content is not available.
   */
  Pending = 'pending',

  /**
   * The file is syncing, the content is out of date.
   */
  Syncing = 'syncing',

  /**
   * The file is synced, the content is available.
   */
  Synced = 'synced',
}
