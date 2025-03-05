/**
 * The AI job type Enum
 * @category AI
 */
export declare const enum GenerativeAIJobType {
    /**
     * The AI job creates a workflow.
     */
    Prompt = "prompt",
    /**
     * The AI job creates a collection.
     */
    CollectionCreate = "collection-create",
    /**
     * The AI job deletes a collection.
     */
    CollectionDelete = "collection-delete",
    /**
     * The AI job retrieves documents.
     */
    CollectionQuery = "collection-query",
    /**
     * The AI job runs embedding.
     */
    Embed = "embed",
    /**
     * The AI job deletes a file.
     */
    FileDelete = "file-delete",
    /**
     * The AI job downloads a file.
     */
    FileDownload = "file-download",
    /**
     * The AI job ingests a file.
     */
    FileIngest = "file-ingest",
    /**
     * The AI job lists files.
     */
    FileList = "file-list",
    /**
     * The AI job runs inference.
     */
    Inference = "inference",
    /**
     * The AI job rates a prompt.
     */
    Rating = "rate",
    /**
     * The AI job for real-time session create.
     */
    RealtimeSessionCreate = "realtime-session-create"
}
