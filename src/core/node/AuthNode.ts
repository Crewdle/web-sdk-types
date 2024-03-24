import { IAuthAgent } from './agent';
import { IAuthUser } from './user';

/**
 * The authenticated node type.
 * @category Core
 */
export type AuthNode = IAuthUser | IAuthAgent;

/**
 * The authenticated node interface.
 * @category Core
 */
export interface IAuthNode {
  /**
   * Get the ID of the node.
   * @returns The ID of the node.
   */
  getId(): string;
}
