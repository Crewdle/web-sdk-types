import { StorageEventType } from '.';

/**
 * The sync complete event.
 * @category Object Storage
 */
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
