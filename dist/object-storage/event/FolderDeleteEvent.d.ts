import { IObjectDeleteEventPayload, StorageEventType } from '.';
/**
 * The folder delete event interface.
 * @category Object Storage
 */
export interface IFolderDeleteEvent {
    /**
     * The folder delete event type.
     */
    event: StorageEventType.FolderDelete;
    /**
     * The folder delete event payload.
     */
    payload: IObjectDeleteEventPayload;
}
