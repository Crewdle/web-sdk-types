import { IDatabaseLayout, IKeyValueDatabaseConnector } from '.';
/**
 * The key-value database connector constructor type.
 * @category Key-Value Database
 */
export type KeyValueDatabaseConnectorConstructor = new (dbKey: string, layout: IDatabaseLayout) => IKeyValueDatabaseConnector;
