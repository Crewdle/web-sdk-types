import { IAgent } from './agent';
import { IUser } from './user';

/**
 * The node interface.
 * @category Core
 */
export interface INode {
  /**
   * Get the ID of the node.
   * @returns The ID of the node.
   */
  getId(): string;

  /**
   * Get the remote connections.
   * @returns The remote connections.
   */
  getRemoteConnections(): Set<string>;
}

/**
 * The node type.
 * @category Core
 */
export type Node = IUser | IAgent;
