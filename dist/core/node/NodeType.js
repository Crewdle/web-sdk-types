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
     * The cloudlet node type.
     */
    NodeType["Cloudlet"] = "cloudlet";
})(NodeType || (NodeType = {}));
// TODO - Review naming for agent and cloudlet
