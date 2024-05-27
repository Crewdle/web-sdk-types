import { StorageEventType } from '.';
export interface ISyncCompleteEvent {
    /**
     * The event type.
     */
    event: StorageEventType.SyncComplete;
}
