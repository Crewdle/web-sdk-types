import { SupportedIndexType } from '.';
/**
 * Interface for a where values are 'between' the lower and upper bounds.
 * Between is always inclusive.
 * @category Key-Value Database
 */
export interface IDatabaseTableQueryWhereBetween {
    /**
     * The key must be a valid indexed key path for the table.
     */
    key: string;
    /**
     * The operator must be 'between'.
     */
    operator: 'between';
    /**
     * The value must be an array of two elements. The first element is the lower bound and the second element is the upper bound.
     */
    value: [SupportedIndexType, SupportedIndexType];
}
