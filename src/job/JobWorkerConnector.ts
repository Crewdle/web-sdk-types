import { IJob, IJobResult } from './Job';

export interface IJobWorkerConnector {
  processJob(job: IJob): AsyncGenerator<IJobResult>;
}
