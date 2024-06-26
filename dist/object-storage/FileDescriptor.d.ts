import { ObjectKind } from './';
import { FileStatus } from './FileStatus';
/**
 * The file descriptor interface.
 * @category Object Storage
 */
export interface IFileDescriptor {
    /**
     * The object kind.
     */
    kind: ObjectKind.File;
    /**
     * The name of the file.
     */
    name: string;
    /**
     * The type of the file.
     */
    type: string;
    /**
     * The size of the file.
     */
    size: number;
    /**
     * The path of the file.
     */
    path: string;
    /**
     * The path name of the file (a combination of the path and the name).
     */
    pathName: string;
    /**
     * The absolute path name of the file (a combination of the path and the name).
     */
    absolutePathName?: string;
    /**
     * The status of the file.
     *
     */
    status: FileStatus;
}
