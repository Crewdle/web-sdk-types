import { NodeType } from '..';

/**
 * The user meta data interface.
 * @category Core
 */
export interface IUserMetadata {
  /**
   * The type of the node.
   */
  type: NodeType.User;

  /**
   * The display name of the user.
   */
  displayName: string;

  /**
   * The email of the user.
   */
  email: string;
}
