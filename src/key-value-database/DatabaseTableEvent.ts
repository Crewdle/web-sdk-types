import { IDatabaseTableAction, IValueType } from '.';

/**
 * Interface for key-value database table events.
 * @category Key-Value Database
 */
export interface IDatabaseTableEvent<T extends IValueType> {
  /**
   * The action performed on the table.
   */
  action: IDatabaseTableAction;

  /**
   * The value of the object.
   */
  value: T;
}
