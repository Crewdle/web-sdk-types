/**
 * The AI job type Enum
 * @category AI
 */
export declare const enum GenerativeAIJobType {
    /**
     * The AI job generates a prompt.
     */
    Prompt = "prompt",
    /**
     * The AI job rates a prompt.
     */
    Rating = "rate",
    /**
     * The user requests to download a document related to the answer they got.
     */
    DownloadDocument = "downloadDocument"
}
