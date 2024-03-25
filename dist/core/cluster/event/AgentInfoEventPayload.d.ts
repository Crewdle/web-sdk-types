import { IAgentMetadata } from '../../node/agent';
import { INodeEventPayload } from '.';
/**
 * The agent info event payload interface.
 * @category Core
 */
export interface IAgentInfoEventPayload extends INodeEventPayload {
    /**
     * The meta data of the agent.
     */
    metaData: IAgentMetadata;
    /**
     * The remote connections of the agent.
     */
    remoteConnections: string[];
}
