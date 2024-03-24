import { IFileDescriptor } from '..';

/**
 * The file write event payload interface.
 * @category Object Storage
 */
export interface IFileWriteEventPayload {
  /**
   * The file descriptor.
   */
  file: IFileDescriptor;
}
