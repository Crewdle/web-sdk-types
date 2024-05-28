import { IJobWorker } from '../job/JobWorker';
/**
 * The AI Worker interface.
 * @category AI
 */
export interface IAIWorker extends IJobWorker {
    /**
     * Close the AI Worker.
     */
    close(): void;
}
