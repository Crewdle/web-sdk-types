/**
 * The pub/sub topic subscriptions interface.
 * @category Pub/Sub
 */
export interface ISubscriptions<T> {
    /**
     * @event data - To subscribe to data events.
     * @param nodeId The node ID of the node who published the data.
     * @param content The content that was published.
     */
    'data': (nodeId: string, content: T) => void;
    /**
     * @event file - To subscribe to file events.
     * @param nodeId The node ID of the node who published the file.
     * @param content The file that was published.
     */
    'file': (nodeId: string, content: File) => void;
}
