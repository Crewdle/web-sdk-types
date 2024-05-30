import { PayloadAction } from '.';

/**
 * The file payload interface.
 * @category Object Storage
 */
export interface IFilePayload {
  /**
   * The file store payload action.
   */
  action: PayloadAction.File;

  /**
   * The file to publish.
   */
  file: File;

  /**
   * The path of the file.
   */
  path?: string;

  /**
   * The flag to skip encryption.
   */
  skipEncryption?: boolean;
}
