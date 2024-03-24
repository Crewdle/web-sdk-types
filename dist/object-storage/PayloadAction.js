/**
 * The object store payload action enum.
 * @category Object Storage
 */
export var PayloadAction;
(function (PayloadAction) {
    /**
     * The action to write a file.
     */
    PayloadAction["File"] = "file";
    /**
     * The action to create a folder.
     */
    PayloadAction["Folder"] = "folder";
    /**
     * The action to move or rename an object.
     */
    PayloadAction["Move"] = "move";
})(PayloadAction || (PayloadAction = {}));
