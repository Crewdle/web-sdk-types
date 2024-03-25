import { IPeerConnectionHandshakeCandidate } from '.';

/**
 * The peer connection handshake candidate event interface.
 * @category Core
 */
export interface IPeerConnectionHandshakeCandidateEvent {
  /**
   * The candidate received.
   */
  readonly candidate: IPeerConnectionHandshakeCandidate | null;
}
