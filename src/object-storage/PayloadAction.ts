/**
 * The object store payload action enum.
 * @category Object Storage
 */
export enum PayloadAction {
  /**
   * The action to write a file.
   */
  File = 'file',

  /**
   * The action to create a folder.
   */
  Folder = 'folder',

  /**
   * The action to move or rename an object.
   */
  Move = 'move'
}
