import { PayloadAction } from '.';
/**
 * The object store folder payload interface.
 * @category Object Storage
 */
export interface IFolderPayload {
    /**
     * The object store folder payload action.
     */
    action: PayloadAction.Folder;
    /**
     * The path of the folder.
     */
    path: string;
}
