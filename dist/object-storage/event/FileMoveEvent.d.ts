import { IObjectMoveEventPayload, StorageEventType } from '.';
/**
 * The file move event interface.
 * @category Object Storage
 */
export interface IFileMoveEvent {
    /**
     * The file move event type.
     */
    event: StorageEventType.FileMove;
    /**
     * The file move event payload.
     */
    payload: IObjectMoveEventPayload;
}
