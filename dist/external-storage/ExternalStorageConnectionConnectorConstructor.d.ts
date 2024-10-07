import { IExternalStorageConnectionConnector } from '.';
/**
 * The external storage connection connector constructor type.
 * @category External Storage
 */
export type ExternalStorageConnectionConnectorConstructor = new (siteId: string, driveId: string, accessToken: string, refreshToken: () => Promise<string>) => IExternalStorageConnectionConnector;
