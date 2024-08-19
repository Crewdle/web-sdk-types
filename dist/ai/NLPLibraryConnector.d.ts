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
    /**
     * Extracts the similarity between two texts.
     * @param text1 The first text.
     * @param text2 The second text.
     * @returns A promise that resolves with the similarity between the texts. The value is between 0 and 1.
     */
    getSimilarity(text1: string, text2: string): Promise<number>;
}
