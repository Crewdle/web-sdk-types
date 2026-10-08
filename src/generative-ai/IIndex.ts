/**
 * Represents a content index.
 * @category AI
 */
export interface IIndex {
  /**
   * The content of the index.
   */
  content: number[] | string;

  /**
   * The start index of the content.
   */
  start: number;

  /**
   * The length of the content.
   */
  length: number;

  /**
   * The chunk text, when `content` is its embedding vector. Lets RAG stores that keep chunk
   * text (S3 Vectors) answer queries without re-reading the source file.
   */
  text?: string;
}
