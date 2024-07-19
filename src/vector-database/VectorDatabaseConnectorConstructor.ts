import { IVectorDatabaseConnector } from '.';

/**
 * The vector database connector constructor type.
 * @category Vector Database
 */
export type VectorDatabaseConnectorConstructor = new () => IVectorDatabaseConnector;
