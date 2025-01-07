/**
 * Options for the QueryFile function
 * @category AI
 */
export interface IQueryFileOptions {
  /**
   * Whether the file has headers.
   */
  headers?: boolean;

  /**
   * The quote character.
   */
  quote?: string;

  /**
   * The delimiter.
   */
  separator?: string;
}
