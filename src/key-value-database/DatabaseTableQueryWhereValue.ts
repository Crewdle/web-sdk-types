import { SupportedIndexType } from '.';

/**
 * Interface for a where clause with basic operators and a single value.
 * @category Key-Value Database
 */
export interface IDatabaseTableQueryWhereValue {
  /**
   * The key must be a valid indexed key path for the table.
   */
  key: string;

  /**
   * The operator must be a valid operator for the key type.
   */
  operator: '==' | '!=' | '>' | '<' | '<=' | '>=';

  /**
   * The value must be a single valid value for the key type.
   */
  value: SupportedIndexType;
}
