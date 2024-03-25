/**
 * The peer connection track event interface.
 * @category Core
 */
export interface IPeerConnectionTrackEvent {
  /**
   * The track received.
   */
  readonly track: MediaStreamTrack;

  /**
   * The streams associated with the track.
   */
  readonly streams: ReadonlyArray<MediaStream>;
}
