/**
 * The peer connection unused stats report interface.
 * @category Core
 */
export interface IPeerConnectionStatsReportUnused {
    /**
     * The type of the report.
     */
    type: 'track' | 'media-source' | 'sender' | 'receiver' | 'transport' | 'candidate-pair' | 'local-candidate' | 'remote-candidate';
    /**
     * The kind of the report.
     */
    kind: 'audio' | 'video';
}
