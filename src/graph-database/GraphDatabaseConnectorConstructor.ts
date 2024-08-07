import { IGraphDatabaseConnector } from './GraphDatabaseConnector';

/**
 * The graph database connector constructor type.
 * @category Graph Database
 */
export type GraphDatabaseConnectorConstructor = new () => IGraphDatabaseConnector;
