import { IPeerConnectionStatsReportInbound, IPeerConnectionStatsReportOutbound, IPeerConnectionStatsReportRemoteInbound, IPeerConnectionStatsReportUnused } from '.';

/**
 * The peer connection stats report type.
 * @category Core
 */
export type PeerConnectionStatsReport = IPeerConnectionStatsReportInbound | IPeerConnectionStatsReportOutbound | IPeerConnectionStatsReportRemoteInbound | IPeerConnectionStatsReportUnused;
