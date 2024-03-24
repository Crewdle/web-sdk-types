import { IUserMetadata } from '../../node/user';
import { INodeEventPayload } from '.';

/**
 * The user info event payload interface.
 * @category Core
 */
export interface IUserInfoEventPayload extends INodeEventPayload {
  /**
   * The meta data of the user.
   */
  metaData: IUserMetadata;

  // TODO - Remove
  /**
   * The remote connections of the user.
   */
  remoteConnections: string[];
}
