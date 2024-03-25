import { IAuthNode, NodeType } from '..';

/**
 * The authenticated user interface.
 * @category Core
 */
export interface IAuthUser extends IAuthNode {
  /**
   * The type of the node.
   */
  type: NodeType.User;

  /**
   * Get the display name of the user.
   * @returns The display name of the user.
   */
  getDisplayName(): string;

  /**
   * Get the email of the user.
   * @returns The email of the user.
   */
  getEmail(): string;

  /**
   * Set the display name of the local user.
   * @param displayName The display name to set.
   */
  setDisplayName(displayName: string): void;

  /**
   * Set the email of the local user.
   * @param email The email to set.
   */
  setEmail(email: string): void;
}
