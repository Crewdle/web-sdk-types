import { IPeerConnectionHandshakeServer } from '.';
/**
 * The peer connection configuration interface.
 * @category Core
 */
export interface IPeerConnectionConfiguration {
    /**
     * The handshake servers to use for the connection.
     */
    handshakeServers?: IPeerConnectionHandshakeServer[];
}
