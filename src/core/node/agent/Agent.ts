import { INode, NodeType } from '..';

/**
 * The agent interface.
 * @category Core
 */
export interface IAgent extends INode {
  /**
   * The type of the node.
   */
  type: NodeType.Agent;
}


