/**
 * The media stream transformer. Used to transform the media stream before it is sent.
 * @param imageData The image data to transform.
 * @returns The transformed image data.
 * @category Media Stream
 */
export type MediaStreamTransformer = (imageData: ImageData) => ImageData;
