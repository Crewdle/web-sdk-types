import { SupportedIndexType } from '.';
/**
 * Interface for a where values are 'in' or 'not-in' the given values.
 * @category Key-Value Database
 */
export interface IDatabaseTableQueryWhereValues {
    /**
     * The key must be a valid indexed key path for the table.
     */
    key: string;
    /**
     * The operator must be 'in' or 'not-in'.
     */
    operator: 'in' | 'not-in';
    /**
     * The value must be an array of values.
     */
    value: SupportedIndexType[];
}
