import { MediaStreamPriority } from '../../media-stream';
import {
  IPeerConnectionDataChannelConnector,
  IPeerConnectionDataChannelEvent,
  IPeerConnectionHandshakeCandidate,
  IPeerConnectionHandshakeCandidateEvent,
  IPeerConnectionOfferOptions,
  IPeerConnectionSender,
  IPeerConnectionSenderMap,
  IPeerConnectionSessionDescription,
  IPeerConnectionTrackEvent,
  PeerConnectionStatsReport
} from '.';

/**
 * The peer connection connector interface - used to establish a connection between two peers.
 * @category Core
 */
export interface IPeerConnectionConnector {
  /**
   * Whether or not candidates can be added to the connection.
   */
  readonly canAddCandidates: boolean;

  /**
   * Whether or not the handshake function exists.
   */
  readonly canRestartHandshake: boolean;

  /**
   * The current connection state.
   */
  readonly connectionState: string;

  /**
   * The current gathering state.
   */
  readonly gatheringState: string;
  
  /**
   * The current handshake state.
   */
  readonly handshakeState: string;

  /**
   * The current signaling state.
   */
  readonly signalingState: string;

  /**
   * The callback for when a candidate is received.
   */
  onCandidate: ((event: IPeerConnectionHandshakeCandidateEvent) => void) | null;

  /**
   * The callback for when the connection state changes.
   */
  onConnectionStateChange: (() => void) | null;

  /**
   * The callback for when a data channel is received.
   */
  onDataChannel: ((event: IPeerConnectionDataChannelEvent) => void) | null;

  /**
   * The callback for when the candidate gathering state changes.
   */
  onGatheringStateChange: (() => void) | null;

  /**
   * The callback for when the handshake state changes.
   */
  onHandshakeStateChange: (() => void) | null;

  /**
   * The callback for when a track is received.
   */
  onTrack: ((event: IPeerConnectionTrackEvent) => void) | null;

  /**
   * Adds a candidate to the connection.
   * @param candidate - The candidate to add.
   * @returns A promise that resolves when the candidate has been added.
   */
  addCandidate(candidate: IPeerConnectionHandshakeCandidate): Promise<void>;

  /**
   * Adds a track to the connection.
   * @param track - The track to add.
   * @param stream - The stream to add the track to.
   * @returns The sender for the track.
   */
  addTrack(track: MediaStreamTrack, stream: MediaStream): IPeerConnectionSender;

  /**
   * Closes the connection.
   */
  close(): void;

  /**
   * Collects the stats for the receivers. The collector must be called with the stats for each stream.
   * @param receivers - The receivers to collect stats for.
   * @param collector - The callback to send the stats to.
   * @returns A promise that resolves when the stats have been collected.
   */
  collectReceiversStats(receivers: Map<string, Set<MediaStreamTrack>>, collector: (stats: PeerConnectionStatsReport[][], streamId: string) => void): Promise<void>;

  /**
   * Collects the stats for the senders. The collector must be called with the stats for each stream.
   * @param senders - The senders to collect stats for.
   * @param collector - The callback to send the stats to.
   * @returns A promise that resolves when the stats have been collected.
   */
  collectSendersStats(senders: Map<string, IPeerConnectionSenderMap>, collector: (stats: PeerConnectionStatsReport[][], streamId: string) => void): Promise<void>;

  /**
   * Creates an answer to an offer.
   * @param offer - The offer to answer.
   * @returns A promise that resolves with the answer.
   */
  createAnswer(offer: IPeerConnectionSessionDescription): Promise<IPeerConnectionSessionDescription>;

  /**
   * Creates a data channel.
   * @param label - The label for the data channel.
   * @returns The data channel connector.
   */
  createDataChannel(label: string): IPeerConnectionDataChannelConnector;

  /**
   * Creates an offer.
   * @param options - The options for creating the offer.
   * @returns A promise that resolves with the offer.
   */
  createOffer(options?: IPeerConnectionOfferOptions): Promise<IPeerConnectionSessionDescription>;

  /**
   * Handles an answer to an offer.
   * @param answer - The answer to handle.
   * @param negotiationHandler - The handler to call after the answer has been handled.
   * @returns A promise that resolves when the answer has been handled.
   */
  handleAnswer(answer: IPeerConnectionSessionDescription, negotiationHandler: () => void): Promise<void>;

  /**
   * Removes a track from the connection.
   * @param sender - The sender for the track to remove.
   */
  removeTrack(sender: IPeerConnectionSender): void;

  /**
   * Replaces a track in the connection.
   * @param track - The track to replace the current track with.
   * @param sender - The sender for the track to replace.
   */
  replaceTrack(track: MediaStreamTrack, sender: IPeerConnectionSender): Promise<void>;

  /**
   * Restarts the handshake.
   */
  restartHandshake(): void;

  /**
   * Sets the encoding parameters for the sender.
   * @param sender - The sender to set the encoding parameters for.
   * @param scaleResolutionDownBy - The scale resolution down by value.
   * @param maxFramerate - The max framerate value.
   * @param maxBitrate - The max bitrate value.
   * @param priority - The priority for the media stream.
   */
  setEncodingParameters(sender: IPeerConnectionSender, scaleResolutionDownBy: number, maxFramerate: number, maxBitrate: number, priority: MediaStreamPriority): void;
}
