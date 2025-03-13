/**
 * Represents a search result.
 * @category AI
 */
export interface ISearchConnectorResult {
    /**
     * The title of the search result.
     */
    title: string;
    /**
     * The snippet of the search result.
     */
    snippet: string;
    /**
     * The URL of the search result.
     */
    url: string;
}
/**
 * Represents a search connector.
 * @category Connector
 */
export interface ISearchConnector {
    /**
     * Searches for the query.
     * @param query The query to search for.
     * @param apiKey The API key to use for the search.
     * @param engineId The engine ID to use for the search.
     * @returns A promise that resolves with the search results.
     */
    search(query: string, engineId: string): Promise<ISearchConnectorResult[]>;
}
