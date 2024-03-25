/**
 * The peer connection outbound stats report interface.
 * @category Core
 */
export interface IPeerConnectionStatsReportOutbound {
  /**
   * The type of the report.
   */
  type: 'outbound-rtp';

  /**
   * The kind of the report.
   */
  kind: 'audio' | 'video';

  /**
   * The bytes sent.
   */
  bytesSent: number;

  /**
   * The timestamp.
   */
  timestamp: number;

  /**
   * The packets sent.
   */
  packetsSent: number;
}
