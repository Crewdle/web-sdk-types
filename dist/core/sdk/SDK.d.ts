import { ICluster } from '../cluster';
import { IAgentCredentials, IAuthAgent, IAgentCapacity } from '../node/agent';
import { IAuthUser, IUserCredentials } from '../node/user';
/**
 * The SDK interface.
 * @category Core
 */
export interface ISDK {
    /**
     * Close the SDK.
     */
    close(): Promise<void>;
    /**
     * Authenticate a user.
     * @param credentials The credentials to authenticate the user with.
     * @returns A promise that resolves with the authenticated user.
     */
    authenticateUser(credentials: IUserCredentials): Promise<IAuthUser>;
    /**
     * Authenticate an agent.
     * @param credentials The credentials to authenticate the agent with.
     * @param reportCapacity A callback to report the agent capacity.
     * @returns A promise that resolves with the authenticated agent.
     */
    authenticateAgent(credentials: IAgentCredentials, reportCapacity?: () => Promise<IAgentCapacity>): Promise<IAuthAgent>;
    /**
     * Join a cluster.
     * @param clusterId The ID of the cluster to join.
     * @returns A promise that resolves with the cluster.
     * @throws {@link SDKClientErrorCodes.NodeNotAuthenticated} if the node is not authenticated.
     */
    joinCluster(clusterId: string): Promise<ICluster>;
}
