import { IMediaStream, MediaStreamTransformer } from '.';
/**
 * The dynamic media stream interface.
 * @category Media Stream
 */
export interface IDynamicMediaStream extends IMediaStream {
    /**
     * Set the transformations to apply to the stream.
     * @param transformations The transformations to apply to the stream.
     */
    setTransformations(transformations: MediaStreamTransformer[]): void;
}
