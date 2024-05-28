import { VectorDatabaseConnectorConstructor } from 'vector-database';
import { IMachineLearningConnector } from '.';
/**
 * The machine learning connector constructor type.
 * @category Machine Learning
 */
export type MachineLearningConnectorConstructor = new (vectorDatabaseConnector: VectorDatabaseConnectorConstructor) => IMachineLearningConnector;
