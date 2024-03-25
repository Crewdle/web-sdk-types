import { MediaSubscriptionParams } from '.';

/**
 * A function that validates media subscription parameters.
 * @param params The media subscription parameters to validate.
 * @returns True if the media subscription parameters are valid.
 * @category Media Stream
 */
export function isValidMediaSubscriptionParams(params: unknown): params is MediaSubscriptionParams {
  if (!params) {
    throw new Error('Invalid params');
  }

  if (typeof params !== 'object') {
    throw new Error('Invalid params');
  }

  const paramsObj = params as MediaSubscriptionParams;

  if (paramsObj.video && typeof paramsObj.video !== 'boolean') {
    if (paramsObj.video.maxResolution) {
      if (typeof paramsObj.video.maxResolution.width !== 'number' || typeof paramsObj.video.maxResolution.height !== 'number') {
        throw new Error('Invalid resolution');
      }
    }
    if (paramsObj.video.renderElement) {
      if (!(paramsObj.video.renderElement instanceof HTMLVideoElement)) {
        throw new Error('Invalid render element');
      }
    }
  }

  return true;
}
