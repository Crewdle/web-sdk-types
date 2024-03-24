/**
 * The peer connection sender interface.
 * @category Core
 */
export interface IPeerConnectionSender {
  /**
   * Replaces the current track with a new track.
   * @param track - The track to replace the current track with.
   */
  replaceTrack(track: MediaStreamTrack): Promise<void>;
}
