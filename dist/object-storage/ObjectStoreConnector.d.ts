import { IFileDescriptor, IFolderDescriptor, IWritableStream, ObjectDescriptor, ObjectKind, IFileOptions, IFile } from '.';
/**
 * Represents a connector for interacting with an object store.
 * @category Connector
 */
export interface IObjectStoreConnector {
    /**
     * Gets a file.
     * @param path The path to the file.
     * @param options The options for writing the file.
     * @returns A promise that resolves with the file.
     */
    get(path: string, options?: IFileOptions): Promise<IFile>;
    /**
     * Lists the objects in a folder.
     * @param path The path to the folder.
     * @param recursive Whether to list the objects recursively.
     * @returns A promise that resolves with an array of object descriptors.
     */
    list(path: string, recursive: boolean): Promise<ObjectDescriptor[]>;
    /**
     * Creates a folder.
     * @param path The path to the folder.
     * @returns A promise that resolves with the folder descriptor.
     */
    createFolder(path: string): Promise<IFolderDescriptor>;
    /**
     * Writes a file.
     * @param file The file to write.
     * @param path The path to write the file to.
     * @param options The options for writing the file.
     * @returns A promise that resolves with the file descriptor.
     */
    writeFile(file: File, path?: string, options?: IFileOptions): Promise<IFileDescriptor>;
    /**
     * Creates a writable stream for a file.
     * @param path The path to the file.
     * @param options The options for creating the writable stream.
     * @returns A promise that resolves with an {@link IWritableStream}.
     */
    createWritableStream(path: string, options?: IFileOptions): Promise<IWritableStream>;
    /**
     * Moves an object.
     * @param path The path to the object.
     * @param newPath The path to move the object to.
     * @returns A promise that resolves with the object kind.
     */
    moveObject(path: string, newPath: string): Promise<ObjectKind>;
    /**
     * Deletes an object.
     * @param path The path to the object.
     * @returns A promise that resolves with the object kind.
     */
    deleteObject(path: string): Promise<ObjectKind>;
    /**
     * Calculates the size of an object.
     * @param path The path to the object.
     * @returns A promise that resolves with the size of the object.
     */
    calculateSize(path: string): Promise<number>;
}
