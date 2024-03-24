/**
 * A table builder for the {@link IKeyValueDatabase}.
 * @category Key-Value Database
 */
export interface ITableBuilder {
    /**
     * Adds an index to the table.
     * @param name The name of the index.
     * @returns The table builder.
     */
    index(name: string): ITableBuilder;
}
