/**
 * The type of content of a stream.
 * @category Core
 */
export var ContentType;
(function (ContentType) {
    /**
     * The content is data.
     */
    ContentType["Data"] = "data";
    /**
     * The content is media.
     */
    ContentType["Media"] = "media";
    /**
     * The content is a file.
     */
    ContentType["File"] = "file";
    // TODO - move this to an internal type
    /**
     * @ignore
     */
    ContentType["PubSub"] = "pubsub";
    /**
     * @ignore
     */
    ContentType["ObjectStore"] = "objectstore";
    /**
     * @ignore
     */
    ContentType["KeyValueDatabase"] = "keyvaluedatabase";
})(ContentType || (ContentType = {}));
