import { IDatabaseTableQueryWhereBetween, IDatabaseTableQueryWhereValue, IDatabaseTableQueryWhereValues } from '.';

/**
 * Interface for a key-value database table query.
 * @category Key-Value Database
 */
export interface IDatabaseTableQuery {
  /**
   * The where clause for the query.
   */
  where?: IDatabaseTableQueryWhereValue |
  IDatabaseTableQueryWhereValues |
  IDatabaseTableQueryWhereBetween;

  /**
   * The order by clause for the query.
   * The key must be a valid indexed key path for the table and match the where clause key, if provided.
   */
  orderBy?: {
    key: string;
    direction: 'asc' | 'desc';
  };

  /**
   * The limit for the query, allowing pagination.
   */
  limit?: number;
  /**
   * The offset for the query, allowing pagination.
   */
  offset?: number;
}
