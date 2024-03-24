import { IDataStream } from '../core/stream';
import { SubscribeFunction, SubscriptionKeys } from '.';
/**
 * The pub/sub topic interface.
 * @category Pub/Sub
 */
export interface IPubSubTopic<T> extends IDataStream {
    /**
     * Get the name of the topic.
     */
    getName(): string;
    /**
     * Get the owner ID of the topic.
     */
    getOwnerId(): string;
    /**
     * Publish content to the topic.
     * @param content The content to publish. Content needs to be a valid JSON.stringify argument.
     * @param nodeIds The node IDs to publish to.
     */
    publish(content: T | File, nodeIds?: string[]): void;
    /**
     * Subscribe to the topic.
     * @typeParam U - Any of the content types defined in {@link ISubscriptions}.
     * @param contentType - One of the content type defined in {@link ISubscriptions}.
     * @param callback - The callback when the content is received. callbacks' payload are defined in {@link ISubscriptions}.
     */
    subscribe: SubscribeFunction<T>;
    /**
     * Unsubscribe from the topic.
     */
    unsubscribe(contentType: SubscriptionKeys<T>): void;
    /**
     * Close the topic.
     */
    close(): void;
}
