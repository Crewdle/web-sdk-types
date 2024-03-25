import { IValueType } from '.';
/**
 * An helper type used to set or add object values in a {@link IDatabaseTable} without explicitely defining an id.
 * @category Key-Value Database
 */
export type ValueTypeOmitId<T extends IValueType> = Omit<T, 'id'>;
