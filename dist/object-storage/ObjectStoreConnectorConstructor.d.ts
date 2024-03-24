import { IObjectStoreConnector } from '.';
/**
 * The object store connector constructor type.
 * @category Object Storage
 */
export type ObjectStoreConnectorConstructor = new (storeKey: string) => IObjectStoreConnector;
