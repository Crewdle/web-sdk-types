import { PayloadAction } from '.';

/**
 * The object store move payload interface.
 * @category Object Storage
 */
export interface IMovePayload {
  /**
   * The object store payload action.
   */
  action: PayloadAction.Move;

  /**
   * The path of the object.
   */
  path: string;

  /**
   * The new path of the object.
   */
  newPath: string;
}
