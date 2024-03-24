import { IObjectMoveEventPayload, StorageEventType } from '.';
/**
 * The folder move event interface.
 * @category Object Storage
 */
export interface IFolderMoveEvent {
    /**
     * The folder move event type.
     */
    event: StorageEventType.FolderMove;
    /**
     * The folder move event payload.
     */
    payload: IObjectMoveEventPayload;
}
