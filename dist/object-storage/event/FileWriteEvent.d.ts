import { IFileWriteEventPayload, StorageEventType } from '.';
/**
 * The file write event interface.
 * @category Object Storage
 */
export interface IFileWriteEvent {
    /**
     * The file write event type.
     */
    event: StorageEventType.FileWrite;
    /**
     * The file write event payload.
     */
    payload: IFileWriteEventPayload;
}
