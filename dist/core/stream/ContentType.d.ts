/**
 * The type of content of a stream.
 * @category Core
 */
export declare enum ContentType {
    /**
     * The content is data.
     */
    Data = "data",
    /**
     * The content is media.
     */
    Media = "media",
    /**
     * The content is a file.
     */
    File = "file",
    /**
     * @ignore
     */
    PubSub = "pubsub",
    /**
     * @ignore
     */
    ObjectStore = "objectstore",
    /**
     * @ignore
     */
    KeyValueDatabase = "keyvaluedatabase",
    /**
     * @ignore
     */
    AI = "ai"
}
