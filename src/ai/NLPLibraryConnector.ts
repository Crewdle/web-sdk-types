export interface INLPLibraryConnector {
  /**
   * Splits the text into sentences.
   * @param text The text to split.
   * @returns A promise that resolves with the sentences.
   */
  getSentences(text: string): Promise<string[]>;

  /**
   * Extracts the entities from the text.
   * @param text The text to extract from.
   * @returns A promise that resolves with the entities.
   */
  getEntities(text: string): Promise<string[]>;
}
