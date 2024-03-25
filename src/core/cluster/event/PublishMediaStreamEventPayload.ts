import { IRemoteMediaStream } from '../../../media-stream';

/**
 * The publish media stream event payload interface.
 * @category Core
 */
export interface IPublishMediaStreamEventPayload {
  /**
   * The owner ID of the media stream.
   */
  ownerId: string;

  /**
   * The remote media stream.
   */
  stream: IRemoteMediaStream;
}
