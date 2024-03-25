/**
 * Base interface for all value types.
 * Value types define the value of objects in a {@link IDatabaseTable}.
 * @category Key-Value Database
 */
export interface IValueType {
  /**
   * The primary key of the object.
   */
  id: string;
}
