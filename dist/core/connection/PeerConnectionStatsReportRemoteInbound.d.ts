/**
 * The peer connection remote inbound stats report interface.
 * @category Core
 */
export interface IPeerConnectionStatsReportRemoteInbound {
    /**
     * The type of the report.
     */
    type: 'remote-inbound-rtp';
    /**
     * The kind of the report.
     */
    kind: 'audio' | 'video';
    /**
     * The round trip time.
     */
    roundTripTime: number;
    /**
     * The jitter.
     */
    jitter?: number;
}
