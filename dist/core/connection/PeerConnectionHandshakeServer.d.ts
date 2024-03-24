/**
 * The peer connection handshake server interface.
 * @category Core
 */
export interface IPeerConnectionHandshakeServer {
    /**
     * The credential for the handshake server.
     */
    credential?: string;
    /**
     * The urls for the handshake server.
     */
    urls: string | string[];
    /**
     * The username for the handshake server.
     */
    username?: string;
}
