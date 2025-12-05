/**
 * The node type enum.
 * @category Core
 */
export var NodeType;
(function (NodeType) {
    /**
     * The user node type.
     */
    NodeType["User"] = "user";
    /**
     * The agent node type.
     */
    NodeType["Agent"] = "agent";
    /**
     * The local node type (offline/standalone mode).
     */
    NodeType["Local"] = "local";
})(NodeType || (NodeType = {}));
