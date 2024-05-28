import { IVectorDatabaseConnector } from '.';

/**
 * The vector database connector constructor type.
 * @category Machine Learning
 */
export type VectorDatabaseConnectorConstructor = new () => IVectorDatabaseConnector;
