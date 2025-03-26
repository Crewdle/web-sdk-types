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
}
