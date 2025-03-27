import { ICluster } from '../cluster';
import { IAgentCredentials, IAuthAgent } from '../node/agent';
import { IAuthUser, IUserCredentials } from '../node/user';
import { ISDKCloseOptions } from './SDKCloseOptions';

/**
 * The SDK interface.
 * @category Core
 */
export interface ISDK {
  /**
   * Close the SDK.
   * @param options The options to close the SDK with.
   */
  close(options?: ISDKCloseOptions): Promise<void>;

  /**
   * Authenticate a user.
   * @param credentials The credentials to authenticate the user with.
   * @returns A promise that resolves with the authenticated user.
   */
  authenticateUser(credentials: IUserCredentials): Promise<IAuthUser>;

  /**
   * Authenticate an agent.
   * @param credentials The credentials to authenticate the agent with.
   * @returns A promise that resolves with the authenticated agent.
   */
  authenticateAgent(credentials: IAgentCredentials): Promise<IAuthAgent>;

  /**
   * Validate a key.
   * @param key The key to validate.
   * @param origin The origin of the request.
   * @returns A promise that resolves with the vendor ID.
   */
  validateKey(key: string, origin?: string): Promise<string>;

  /**
   * Join a cluster.
   * @param clusterId The ID of the cluster to join.
   * @returns A promise that resolves with the cluster.
   * @throws {@link SDKClientErrorCodes.NodeNotAuthenticated} if the node is not authenticated.
   */
  joinCluster(clusterId: string): Promise<ICluster>;
}
