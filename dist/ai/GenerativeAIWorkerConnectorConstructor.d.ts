import { IGenerativeAIWorkerConnector, VectorDatabaseConnectorConstructor } from '.';
/**
 * The generative AI worker connector constructor type.
 * @category AI
 */
export type GenerativeAIWorkerConnectorConstructor = new (vectorDatabaseConnector: VectorDatabaseConnectorConstructor) => IGenerativeAIWorkerConnector;
