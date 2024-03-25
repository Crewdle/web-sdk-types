import { IPeerConnectionConfiguration, IPeerConnectionConnector } from '.';

/**
 * The peer connection connector constructor type.
 * @category Core
 */
export type PeerConnectionConnectorConstructor = new (configuration: IPeerConnectionConfiguration) => IPeerConnectionConnector;
