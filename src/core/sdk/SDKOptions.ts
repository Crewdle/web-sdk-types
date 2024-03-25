import { KeyValueDatabaseConnectorConstructor } from 'key-value-database';
import { ILoggingConnector } from '.';
import { ObjectStoreConnectorConstructor } from 'object-storage';
import { PeerConnectionConnectorConstructor } from '../connection';

/**
 * Options to configure the SDK.
 * @category Core
 */
export interface ISDKOptions {
  /**
   * The audio context to use for audio processing.
   */
  audioContext?: AudioContext;

  /**
   * The flag to disable the interval hack that ensures the intervals run at the correct time.
   */
  disableIntervalHack?: boolean;

  /**
   * The custom logging connector to use for logging events.
   */
  loggingConnectors?: ILoggingConnector[];

  /**
   * The custom object store connector to use for storing objects.
   * If not provided, the default object store connector is OPFS.
   */
  objectStoreConnector?: ObjectStoreConnectorConstructor;

  /**
   * The custom key-value database connector to use for storing key-value pairs.
   * If not provided, the default key-value database connector is IndexedDB.
   */
  keyValueDatabaseConnector?: KeyValueDatabaseConnectorConstructor;

  /**
   * The custom peer connection connector to use for creating peer connections.
   * If not provided, the default peer connection connector is WebRTC in browser.
   */
  peerConnectionConnector?: PeerConnectionConnectorConstructor;

  /**
   * The maximum number of outgoing subscriptions.
   */
  maxOutgoingSubscriptions?: number;

  /**
   * The minimum number of initial connections.
   */
  minConnections?: number;

  /**
   * The maximum number of connections a node can have.
   */
  // TODO rename targetMaxConnections?
  // Validate that maxConnections is greater than or equal to 2*minConnections
  maxConnections?: number;

  /**
   * The maximum distance allowed between two nodes in the network.
   */
  maxDistance?: number;

  /**
   * The maximum frame rate to use for video.
   */
  maxFps?: number;

  /**
   * The maximum bits per pixel to use for video.
   */
  maxBpp?: number;
}