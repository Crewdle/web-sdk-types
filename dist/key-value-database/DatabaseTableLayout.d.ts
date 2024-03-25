import { IDatabaseTableIndex } from '.';
/**
 * Interface for a key-value database table layout.
 * @category Key-Value Database
 */
export interface IDatabaseTableLayout {
    /**
     * The secondary indexes for the table.
     */
    indexes?: IDatabaseTableIndex[];
}
