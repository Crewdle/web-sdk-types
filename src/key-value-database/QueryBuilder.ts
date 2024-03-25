import { IDatabaseTableQuery, IDatabaseTableQueryWhereValue, IDatabaseTableQueryWhereValues, IDatabaseTableQueryWhereBetween } from '.';

/**
 * The Query Builder interface for building queries for the {@link IDatabaseTable}.
 * @category Key-Value Database
 */
export interface IQueryBuilder {
  /**
   * Gets the query.
   * @returns The query: {@link IDatabaseTableQuery}.
   */
  getQuery(): IDatabaseTableQuery;

  /**
   * @overload A where clause with basic operators and a single value.
   * @param operator A basic operator.
   * @param value A single value.
   * @returns A QueryBuilder instance with a where clause added.
   */
  where(operator: IDatabaseTableQueryWhereValue['operator'], value: IDatabaseTableQueryWhereValue['value']): IQueryBuilder;

  /**
   * @overload A where clause with 'in' or 'not-in' the given values.
   * @param operator An 'in' or 'not-in' operator.
   * @param value An array of values.
   * @returns A QueryBuilder instance with a where clause added.
   */
  where(operator: IDatabaseTableQueryWhereValues['operator'], value: IDatabaseTableQueryWhereValues['value']): IQueryBuilder;

  /**
   * @overload A where clause with 'between' the given values.
   * @param operator A 'between' operator.
   * @param value An array of two values.
   * @returns A QueryBuilder instance with a where clause added.
  */
  where(operator: IDatabaseTableQueryWhereBetween['operator'], value: IDatabaseTableQueryWhereBetween['value']): IQueryBuilder;

  /**
   * Adds an order by clause to the query.
   * @param order The order for the order by clause, either 'asc' or 'desc'.
   * @returns A QueryBuilder instance with an order by clause added.
   * @throws an SDKClientError with the code `SDKClientErrorCodes.QueryBuilderInvalidArgument` if the order is not 'asc' or 'desc'.
   */
  orderBy(order: 'asc' | 'desc'): IQueryBuilder;

  /**
   * Adds a limit to the query.
   * @param limit The limit for the query.
   * @returns A QueryBuilder instance with a limit added.
   * @throws an SDKClientError with the code `SDKClientErrorCodes.QueryBuilderInvalidArgument` if the limit is not a positive number.
   */
  limit(limit: number): IQueryBuilder;

  /**
   * Adds an offset to the query.
   * @param offset The offset for the query.
   * @returns A QueryBuilder instance with an offset added.
   * @throws an SDKClientError with the code `SDKClientErrorCodes.QueryBuilderInvalidArgument` and a descriptive message if the offset is not a positive number.
   */
  offset(offset: number): IQueryBuilder;
}
