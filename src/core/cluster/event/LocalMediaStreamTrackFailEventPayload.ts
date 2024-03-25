import { MediaTrackKind } from '../../../media-stream';

/**
 * The local media stream track fail event payload interface.
 * @category Core
 */
export interface ILocalMediaStreamTrackFailEventPayload {
  /**
   * The label of the media stream.
   */
  label: string;

  /**
   * The kind of the track.
   */
  trackKinds: MediaTrackKind[];
}
