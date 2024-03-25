import { IFilePayload, IFolderPayload, IMovePayload } from '.';

/**
 * The object store payload.
 * @category Object Storage
 */
export type Payload = IFilePayload | IFolderPayload | IMovePayload;
