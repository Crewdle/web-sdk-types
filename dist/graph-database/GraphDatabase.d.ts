import { IDataStream } from '../core';
/**
 * The interface for the graph database.
 * @category Graph Database
 */
export interface IGraphDatabase extends IDataStream {
    /**
     * Get the name of the database.
     */
    getName(): string;
    /**
     * Get the owner ID of the database.
     */
    getOwnerId(): string;
    /**
     * Close the database.
     */
    close(): void;
    /**
     * Add a node to the database.
     * @param name The name of the content.
     * @param content The content of the node.
     * @param node The node to add.
     */
    addNode(name: string, content: string[], node: string): void;
    /**
     * Add an edge to the database.
     * @param from The node to add the edge from.
     * @param to The node to add the edge to.
     */
    addEdge(from: string, to: string): void;
    /**
     * Get the content of the nodes and their neighbors.
     * @param nodes The nodes to get the content of.
     * @param maxDepth The maximum depth to search.
     * @returns The content of the nodes and their neighbors.
     */
    getContent(nodes: string[], maxDepth: number): {
        [key: string]: string[];
    };
}
