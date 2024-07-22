import { IJobWorkerConnector, IJobWorkerOptions } from '../job';
import { IJobParametersAI, IJobResultAI } from './GenerativeAI';

/**
 * The generative AI model input types.
 * @category AI
 */
export enum GenerativeAIModelInputType {
  Text = 'text',
}

/**
 * The generative AI model output types.
 * @category AI
 */
export enum GenerativeAIModelOutputType {
  Text = 'text',
  Vector = 'vector',
}

/**
 * The generative AI model interface.
 * @category AI
 */
export interface IGenerativeAIModel {
  id: string;
  inputType: GenerativeAIModelInputType;
  outputType: GenerativeAIModelOutputType;
  sourceUrl: string;
}

/**
 * The generative AI worker options.
 * @category AI
 */
export interface IGenerativeAIWorkerOptions extends IJobWorkerOptions {
  model: IGenerativeAIModel;
}

/**
 * The generative AI worker connector interface.
 * @category Connector
 */
export interface IGenerativeAIWorkerConnector extends IJobWorkerConnector<IJobParametersAI, IJobResultAI> {
  /**
   * Initialize the machine learning model.
   * @param models A map of model IDs and pathnames.
   * @returns A promise that resolves when the model has been initialized.
   */
  initialize(models: Map<string, string>): Promise<void>;

  /**
   * Process a job.
   * @param parameters The job parameters.
   * @param options The job options.
   * @returns A promise that resolves with the job result.
   */
  processJob(parameters: IJobParametersAI, options?: IGenerativeAIWorkerOptions): Promise<IJobResultAI>;

  /**
   * Stream a job.
   * @param parameters The job parameters.
   * @param options The job options.
   * @returns An async generator that yields the job result.
   */
  processJobStream(parameters: IJobParametersAI, options?: IGenerativeAIWorkerOptions): AsyncGenerator<IJobResultAI>;
}
