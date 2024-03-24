import { IFolderDescriptor } from '..';
/**
 * The folder create event payload interface.
 * @category Object Storage
 */
export interface IFolderCreateEventPayload {
    /**
     * The folder descriptor.
     */
    folder: IFolderDescriptor;
}
