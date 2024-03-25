/**
 * The object (file or folder) delete event payload interface.
 * @category Object Storage
 */
export interface IObjectDeleteEventPayload {
    /**
     * The name of the object.
     */
    name: string;
    /**
     * The path of the object.
     */
    path: string;
    /**
     * The path name of the object (a combination of the path and the name).
     */
    pathName: string;
}
