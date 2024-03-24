import { IAgentMetadata } from './agent';
import { IUserMetadata } from './user';

/**
 * The node meta data type.
 * @category Core
 */
export type NodeMetadata = IUserMetadata | IAgentMetadata;
