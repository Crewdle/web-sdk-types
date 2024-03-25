/**
 * The object (file or folder) move event payload interface.
 * @category Object Storage
 */
export interface IObjectMoveEventPayload {
  /**
   * The name of the object.
   */
  name: string;

  /**
   * The path of the object.
   */
  path: string;

  /**
   * The path name of the object (a combination of the path and the name).
   */
  pathName: string;

  /**
   * The old name of the object.
   */
  oldName: string;

  /**
   * The old path of the object.
   */
  oldPath: string;

  /**
   * The old path name of the object (a combination of the old path and the old name).
   */
  oldPathName: string;
}
