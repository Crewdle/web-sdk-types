import { IFileDeleteEvent, IFileMoveEvent, IFileWriteEvent, IFolderCreateEvent, IFolderDeleteEvent, IFolderMoveEvent, ISyncCompleteEvent } from '.';

/**
 * The object store event.
 * @category Object Storage
 */
export type StorageEvent = IFileWriteEvent |
  IFileDeleteEvent |
  IFileMoveEvent |
  IFolderCreateEvent |
  IFolderDeleteEvent |
  IFolderMoveEvent |
  ISyncCompleteEvent;
