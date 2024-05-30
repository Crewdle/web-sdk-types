import { IVectorDatabaseConnector } from '.';

/**
 * The vector database connector constructor type.
 * @category AI
 */
export type VectorDatabaseConnectorConstructor = new () => IVectorDatabaseConnector;
