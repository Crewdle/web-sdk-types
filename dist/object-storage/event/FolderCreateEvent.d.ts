import { IFolderCreateEventPayload, StorageEventType } from '.';
/**
 * The folder create event interface.
 * @category Object Storage
 */
export interface IFolderCreateEvent {
    /**
     * The folder create event type.
     */
    event: StorageEventType.FolderCreate;
    /**
     * The folder create event payload.
     */
    payload: IFolderCreateEventPayload;
}
