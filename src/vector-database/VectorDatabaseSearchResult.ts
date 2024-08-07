/**
 * Represents a search result from the vector database.
 * @category Vector Database
 */
export interface IVectorDatabaseSearchResult {
  /**
   * The content of the search result.
   */
  content: string;

  /**
   * The relevance of the search result.
   * The relevance is a number between 0 and 1, where 1 is the most relevant.
   */
  relevance: number;

  /**
   * The path name of the document containing the search result.
   */
  pathName: string;
}
