import { IPeerConnectionDataChannelConnector } from '.';

/**
 * The peer connection data channel event interface.
 * @category Core
 */
export interface IPeerConnectionDataChannelEvent {
  /**
   * The data channel received.
   */
  readonly channel: IPeerConnectionDataChannelConnector;
}
