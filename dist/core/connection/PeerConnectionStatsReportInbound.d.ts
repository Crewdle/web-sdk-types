/**
 * The peer connection inbound stats report interface.
 * @category Core
 */
export interface IPeerConnectionStatsReportInbound {
    /**
     * The type of the report.
     */
    type: 'inbound-rtp';
    /**
     * The kind of the report.
     */
    kind: 'audio' | 'video';
    /**
     * The bytes received.
     */
    bytesReceived: number;
    /**
     * The timestamp.
     */
    timestamp: number;
    /**
     * The packets received.
     */
    packetsReceived: number;
    /**
     * The packets lost.
     */
    packetsLost: number;
    /**
     * The jitter.
     */
    jitter?: number;
    /**
     * The estimated playout timestamp.
     */
    estimatedPlayoutTimestamp?: number;
}
