import { ISubscriptions } from '.';

/**
 * The pub/sub topic subscription keys.
 * @category Pub/Sub
 */
export type SubscriptionKeys<T> = keyof ISubscriptions<T>;
