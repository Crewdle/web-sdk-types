import { IAuthNode, NodeType } from '..';

/**
 * The authenticated agent interface.
 * @category Core
 */
export interface IAuthAgent extends IAuthNode {
  /**
   * The type of the node.
   */
  type: NodeType.Agent;
}
