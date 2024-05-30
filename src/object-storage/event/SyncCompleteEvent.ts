import { StorageEventType } from '.';

export interface ISyncCompleteEvent {
  /**
   * The event type.
   */
  event: StorageEventType.SyncComplete;

  /**
   * The sync complete event payload.
   */
  payload: null;
}
