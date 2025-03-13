import { IGenerativeAIRagConnector } from './GenerativeAIRagConnector';

/**
 * The constructor for the GenerativeAI Rag Connector.
 */
export type GenerativeAIRagConnectorConstructor = new (apiKey: string) => IGenerativeAIRagConnector;