/**
 * The peer connection session description interface.
 * @category Core
 */
export interface IPeerConnectionSessionDescription {
  /**
   * The SDP.
   */
  sdp?: string;

  /**
   * The type of the session description.
   */
  type: string;
}
