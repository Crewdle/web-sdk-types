import { IJob, IJobResult } from './Job';
export interface IJobWorkerConnector {
    processJob(job: IJob): Promise<IJobResult> | AsyncGenerator<IJobResult>;
}
