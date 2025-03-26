/**
 * Represents an AI search connector.
 * @category Connector
 */
export interface IAISearchConnector {
    /**
     * Searches for the query.
     * @param query The query to search for.
     * @param modelId The model id to use for the search.
     * @param apiKey The API key to use for the search.
     * @returns A promise that resolves with the search result.
     */
    search(query: string, modelId: string): Promise<string>;
}
