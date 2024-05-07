import { IAgentCapacity } from '.';
import { IAuthNode, NodeType } from '..';
import { Unsubscribe } from '../..';
/**
 * The authenticated agent interface.
 * @category Core
 */
export interface IAuthAgent extends IAuthNode {
    /**
     * The type of the node.
     */
    type: NodeType.Agent;
    /**
     * Subscribe to when the agent configuration changes.
     * @param callback The callback to invoke when the agent configuration changes.
     * @returns The unsubscribe function.
     */
    onConfigurationChange(callback: () => Promise<void>): Unsubscribe;
    /**
     * Set the report capacity callback.
     * @param reportCapacity The report capacity callback.
     * @returns The unsubscribe function.
     */
    setReportCapacity(reportCapacity: () => Promise<IAgentCapacity>): Unsubscribe;
}
