import { GenerativeAIJobType } from '../../GenerativeAIJobType';
/**
 * AI worker connector parameters Interface
 * @category AI
 */
export interface IGenerativeAIWorkerConnectorParameters {
    /**
     * The AI job type.
     */
    type: GenerativeAIJobType;
    /**
     * Provider prompt-cache routing key (2026-08-26). Populated by the engine
     * as `vendorId:workflowId` (or `vendorId:agent:<agentId>` outside a
     * workflow) so requests sharing a stable prefix — the agent instructions +
     * tool schemas — land on the same provider cache shard. Connectors whose
     * provider supports prompt caching (e.g. OpenAI `prompt_cache_key`) pass it
     * through; others ignore it.
     */
    cacheKey?: string;
}
