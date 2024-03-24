import { Resolution } from '.';

/**
 * The subscription parameters for a video track.
 * @category Media Stream
 */
export type VideoSubscriptionParams = {
  /**
   * The maximum resolution for the video track.
   */
  maxResolution?: Resolution;

  /**
   * The HTML element to render the video track to.
   */
  renderElement?: HTMLVideoElement;
};
