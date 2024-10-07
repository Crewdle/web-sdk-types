import { KeyValueDatabaseConnectorConstructor } from '../../key-value-database';
import { ILoggingConnector } from '.';
import { DocumentParserConnectorConstructor, ObjectStoreConnectorConstructor } from '../../object-storage';
import { PeerConnectionConnectorConstructor } from '../connection';
import { GenerativeAIWorkerConnectorConstructor, NLPLibraryConnectorConstructor, SearchConnectorConstructor } from '../../generative-ai';
import { VectorDatabaseConnectorConstructor } from '../../vector-database';
import { GraphDatabaseConnectorConstructor } from '../../graph-database';
import { ExternalStorageConnectionConnectorConstructor, ExternalStorageType } from '../../external-storage';
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
     * The custom external storage connectors.
     */
    externalStorageConnectors?: Map<ExternalStorageType, ExternalStorageConnectionConnectorConstructor>;
    /**
     * The custom key-value database connector to use for storing key-value pairs.
     * If not provided, the default key-value database connector is IndexedDB.
     */
    keyValueDatabaseConnector?: KeyValueDatabaseConnectorConstructor;
    /**
     * The custom logging database connector to use for storing Job logs.
     */
    loggingDatabaseConnector?: KeyValueDatabaseConnectorConstructor;
    /**
     * The custom peer connection connector to use for creating peer connections.
     * If not provided, the default peer connection connector is WebRTC in browser.
     */
    peerConnectionConnector?: PeerConnectionConnectorConstructor;
    /**
     * The custom generative AI worker connectors to use for generative AI tasks.
     */
    generativeAIWorkerConnectors?: GenerativeAIWorkerConnectorConstructor[];
    /**
     * The custom vector database connector to use for vector database tasks.
     */
    vectorDatabaseConnector?: VectorDatabaseConnectorConstructor;
    /**
     * The custom graph database connector to use for graph database tasks.
     */
    graphDatabaseConnector?: GraphDatabaseConnectorConstructor;
    /**
     * The custom document parser connector to use for parsing documents.
     */
    documentParserConnector?: DocumentParserConnectorConstructor;
    /**
     * The custom natural language processing connector to use for natural language processing tasks.
     */
    nlpLibraryConnector?: NLPLibraryConnectorConstructor;
    /**
     * The custom search connector to use for searching the web.
     */
    searchConnector?: SearchConnectorConstructor;
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
