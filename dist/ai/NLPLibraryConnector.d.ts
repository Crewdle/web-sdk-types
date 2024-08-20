export interface INLPEntityTypes {
    ner: boolean;
    noun: boolean;
    propn: boolean;
    verb: boolean;
}
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
     * @param types The types of entities to extract.
     * @returns A promise that resolves with the entities.
     */
    getEntities(text: string, types: INLPEntityTypes): Promise<string[]>;
    /**
     * Extracts the similarity between two texts.
     * @param text1 The first text.
     * @param text2 The second text.
     * @returns A promise that resolves with the similarity between the texts. The value is between 0 and 1.
     */
    getSimilarity(text1: string, text2: string): Promise<number>;
}
