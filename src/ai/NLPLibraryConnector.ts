export interface INLPLibraryConnector {
  /**
   * Splits the text into sentences.
   * @param text The text to split.
   * @returns A promise that resolves with the sentences.
   */
  splitText(text: string): Promise<string[]>;
}
