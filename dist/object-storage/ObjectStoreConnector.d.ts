import { ObjectDescriptor, ObjectKind } from '.';
/**
 * The object store connector interface.
 * @category Object Storage
 */
export interface IObjectStoreConnector {
    /**
     * Gets a file.
     * @param path The path to the file.
     * @returns A promise that resolves with the file.
     */
    get(path: string): Promise<File>;
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
     * @returns A promise that resolves when the folder is created.
     */
    createFolder(path: string): Promise<void>;
    /**
     * Writes a file.
     * @param file The file to write.
     * @param path The path to write the file to.
     */
    writeFile(file: File, path?: string): Promise<void>;
    /**
     * Moves an object.
     * @param path The path to the object.
     * @param newPath The path to move the object to.
     */
    moveObject(path: string, newPath: string): Promise<ObjectKind>;
    /**
     * Deletes an object.
     * @param path The path to the object.
     */
    deleteObject(path: string): Promise<ObjectKind>;
    /**
     * Calculates the size of an object.
     * @param path The path to the object.
     * @returns A promise that resolves with the size of the object.
     */
    calculateSize(path: string): Promise<number>;
}
