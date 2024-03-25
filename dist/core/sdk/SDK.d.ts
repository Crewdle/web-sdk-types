import { ICluster } from '../cluster';
import { IAgentCredentials, IAuthAgent } from '../node/agent';
import { IAuthUser, IUserCredentials } from '../node/user';
/**
 * The SDK interface.
 * @category Core
 */
export interface ISDK {
    /**
     * Authenticate a user.
     * @param credentials The credentials to authenticate the user with.
     * @returns A promise that resolves with the authenticated user.
     */
    authenticateUser(credentials: IUserCredentials): Promise<IAuthUser>;
    /**
     * Authenticate an agent.
     * @param agentGroupId The ID of the agent group to authenticate the agent with.
     * @returns A promise that resolves with the authenticated agent.
     */
    authenticateAgent(credentials: IAgentCredentials): Promise<IAuthAgent>;
    /**
     * Join a cluster.
     * @param clusterId The ID of the cluster to join.
     * @returns A promise that resolves with the cluster.
     * @throws {@link SDKClientErrorCodes.NodeNotAuthenticated} if the node is not authenticated.
     */
    joinCluster(clusterId: string): Promise<ICluster>;
}
