import { IIndex } from '../generative-ai';

/**
 * The graph database connector interface.
 * @category Connector
 */
export interface IGraphDatabaseConnector {
  /**
   * Add a node to the database.
   * @param name The name of the content.
   * @param content The content.
   * @param index The index of the node.
   * @param node The node to add.
   */
  addNode(name: string, content: string, index: IIndex[], node: string): void;

  /**
   * Add an edge to the database.
   * @param from The node to add the edge from.
   * @param to The node to add the edge to.
   */
  addEdge(from: string, to: string): void;

  /**
   * Get the content of the nodes and their neighbors.
   * @param nodes The nodes to get the content of.
   * @param maxDepth The maximum depth to search (default 1).
   * @param contentSize The size of the content to return (content +/- contentSize, default 0).
   * @returns The content of the nodes and their neighbors.
   */
  getContent(nodes: string[], maxDepth?: number, contentSize?: number): { [key: string]: string[] };

  /**
   * Remove content from the database.
   * @param name The name of the content to remove.
   */
  remove(name: string): void;

  /**
   * Get the size of the database
   * @returns The size of the database.
   */
  getSize(): number;

  /**
   * Save the database to disk.
   * @param version The version of the data collection.
   */
  saveToDisk(version: string): void;

  /**
   * Load the database from disk.
   * @param version The version of the data collection.
   */
  loadFromDisk(version: string): void;
}
