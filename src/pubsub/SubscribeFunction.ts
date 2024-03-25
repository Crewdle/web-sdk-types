import { ISubscriptions, SubscriptionKeys } from '.';

/**
 * The pub/sub topic subscribe function.
 * @category Pub/Sub
 */
export type SubscribeFunction<T> = {
  /**
   * Subscribe to the topic.
   * @typeParam U - Any of the content types defined in {@link ISubscriptions}.
   * @param contentType - One of the content type defined in {@link ISubscriptions}.
   * @param callback - The callback when the content is received. callbacks' payload are defined in {@link ISubscriptions}.
   */
  <U extends SubscriptionKeys<T>>(contentType: U, callback: ISubscriptions<T>[U]): void;
};
