import { IUser } from '.';

/**
 * The local user interface.
 * @category Core
 */
export interface ILocalUser extends IUser {
  /**
   * Set the display name of the local user.
   * @param displayName The display name to set.
   */
  setDisplayName(displayName: string): void;

  /**
   * Set the email of the local user.
   * @param email The email to set.
   */
  setEmail(email: string): void;
}
