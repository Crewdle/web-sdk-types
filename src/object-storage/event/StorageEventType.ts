/**
 * The file store event type enum.
 * @category Object Storage
 */
export enum StorageEventType {
  /**
   * The file write event.
   */
  FileWrite = 'file-write',

  /**
   * The file delete event.
   */
  FileDelete = 'file-delete',

  /**
   * The file move event.
   */
  FileMove = 'file-move',

  /**
   * The folder create event.
   */
  FolderCreate = 'folder-create',

  /**
   * The folder delete event.
   */
  FolderDelete = 'folder-delete',

  /**
   * The folder move event.
   */
  FolderMove = 'folder-move'
}
