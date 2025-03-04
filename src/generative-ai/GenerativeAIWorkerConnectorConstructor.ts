import { IGenerativeAIWorkerConnector } from '.';

/**
 * The generative AI worker connector constructor type.
 * @category AI
 */
export type GenerativeAIWorkerConnectorConstructor = new (apiKey?: string) => IGenerativeAIWorkerConnector;
