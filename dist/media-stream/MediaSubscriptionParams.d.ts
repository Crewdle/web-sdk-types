import { AudioSubscriptionParams, VideoSubscriptionParams } from '.';
/**
 * The subscription parameters for a media stream.
 * @category Media Stream
 */
export type MediaSubscriptionParams = {
    /**
     * The video subscription parameters.
     */
    video?: VideoSubscriptionParams | boolean;
    /**
     * The audio subscription parameters.
     */
    audio?: AudioSubscriptionParams | boolean;
};
