import { IGenerativeAIFileConnector } from './GenerativeAIFileConnector';
/**
 * The constructor for the GenerativeAI File Connector.
 */
export type GenerativeAIFileConnectorConstructor = new (apiKey: string) => IGenerativeAIFileConnector;
