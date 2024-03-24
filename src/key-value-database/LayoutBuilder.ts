import { IDatabaseLayout, ITableBuilder } from '.';

/**
 * The layout builder interface for the {@link IKeyValueDatabase}.
 * @category Key-Value Database
 */
export interface ILayoutBuilder {
  /**
   * Adds a table to the layout.
   * @param name The name of the table.
   * @returns A table builder.
   */
  table(name: string): ITableBuilder;

  /**
   * Gets the layout.
   * @returns The layout: {@link IDatabaseLayout}.
   */
  getLayout(): IDatabaseLayout;
}
