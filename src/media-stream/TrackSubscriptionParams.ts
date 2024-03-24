import { AudioSubscriptionParams, VideoSubscriptionParams } from '.';

/**
 * The subscription parameters for a track.
 * @category Media Stream
 */
export type TrackSubscriptionParams = VideoSubscriptionParams | AudioSubscriptionParams;
