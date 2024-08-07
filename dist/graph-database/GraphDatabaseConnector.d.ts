/**
 * The graph database connector interface.
 * @category Connector
 */
export interface IGraphDatabaseConnector {
    /**
     * Add a node to the database.
     * @param node The node to add.
     */
    addNode(node: string): void;
    /**
     * Add an edge to the database.
     * @param from The node to add the edge from.
     * @param to The node to add the edge to.
     */
    addEdge(from: string, to: string): void;
    /**
     * Get the neighbors of a node.
     * @param node The node to get the neighbors of.
     */
    getNeighbors(node: string): string[];
    /**
     * Get the size of the database
     * @returns The size of the database.
     */
    getSize(): number;
}
