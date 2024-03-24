import { IObjectDeleteEventPayload, StorageEventType } from '.';
/**
 * The file delete event interface.
 * @category Object Storage
 */
export interface IFileDeleteEvent {
    /**
     * The file delete event type.
     */
    event: StorageEventType.FileDelete;
    /**
     * The file delete event payload.
     */
    payload: IObjectDeleteEventPayload;
}
