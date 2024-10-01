import { IGenerativeAIWorkerConnectorPromptResult } from '../jobs/prompt';
/**
 * Union type for AI worker connector result.
 * @category AI
 */
export type GenerativeAIWorkerConnectorResult = IGenerativeAIWorkerConnectorPromptResult;
/**
 * Helper type for AI worker connector result enum type.
 * This is required in connectors that cannot import the AIJobType enum.
 * @category AI
 */
export type GenerativeAIWorkerConnectorTypes = GenerativeAIWorkerConnectorResult['type'];
