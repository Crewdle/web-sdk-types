import { ObjectDescriptor, ObjectKind } from '.';
/**
 * The object store folder descriptor interface.
 * @category Object Storage
 */
export interface IFolderDescriptor {
    /**
     * The object kind.
     */
    kind: ObjectKind.Folder;
    /**
     * The name of the folder.
     */
    name: string;
    /**
     * The path of the folder.
     */
    path: string;
    /**
     * The path name of the folder (a combination of the path and the name).
     */
    pathName: string;
    /**
     * The absolute path name of the folder (a combination of the path and the name).
     */
    absolutePathName?: string;
    /**
     * The folder entries.
     */
    entries?: ObjectDescriptor[];
}
