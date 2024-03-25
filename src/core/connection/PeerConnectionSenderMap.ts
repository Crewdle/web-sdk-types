import { IPeerConnectionSender } from '.';

/**
 * The peer connection sender map interface.
 * @category Core
 */
export interface IPeerConnectionSenderMap {
  /**
   * The stream associated with the sender.
   */
  stream: MediaStream;

  /**
   * The tracks associated with the sender.
   */
  tracks: {
    video?: { track?: MediaStreamTrack; sender?: IPeerConnectionSender; };
    audio?: { track?: MediaStreamTrack; sender?: IPeerConnectionSender; };
  };
}
