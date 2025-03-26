/**
 * Represents a search result.
 * @category AI
 */

export interface ISearchResult {
  /**
   * The content of the search result.
   */
  content: string;

  /**
   * The start index of the search
   */
  start?: number;

  /**
   * The length of the search result.
   */
  length?: number;

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
