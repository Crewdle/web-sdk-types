import { IJobWorkerConnector, IJobWorkerOptions } from '../job';
import { GenAIJobParameters, GenAIResult, IPromptResult } from './GenerativeAI';

/**
 * The generative AI model input types.
 * @category AI
 */
export enum GenerativeAIModelInputType {
  Text = 'text',
  Audio = 'audio',
  Image = 'image',
}

/**
 * The generative AI model output types.
 * @category AI
 */
export enum GenerativeAIModelOutputType {
  Text = 'text',
  Audio = 'audio',
  Image = 'image',
  Vector = 'vector',
  Entity = 'entity',
}

/**
 * The generative AI task types.
 * @category AI
 */
export enum GenerativeAITaskType {
  TextGeneration = 'text-generation',
  Embeddings = 'embeddings',
  FillMask = 'fill-mask',
  QuestionAnswering = 'question-answering',
  SentenceSimilarity = 'sentence-similarity',
  Summarization = 'summarization',
  TextClassification = 'text-classification',
  SentimentAnalysis = 'sentiment-analysis',
  TokenClassification = 'token-classification',
  NamedEntityRecognition = 'ner',
  Translation = 'translation',
  ZeroShotClassification = 'zero-shot-classification',
  FeatureExtraction = 'feature-extraction',
  DepthEstimation = 'depth-estimation',
  ImageClassification = 'image-classification',
  ImageSegmentation = 'image-segmentation',
  ImageToImage = 'image-to-image',
  ObjectDetection = 'object-detection',
  ImageFeatureExtraction = 'image-feature-extraction',
  AudioClassification = 'audio-classification',
  AutomaticSpeechRecognition = 'automatic-speech-recognition',
  TextToSpeech = 'text-to-speech',
  DocumentQuestionAnswering = 'document-question-answering',
  ImageToText = 'image-to-text',
  ZeroShotAudioClassification = 'zero-shot-audio-classification',
  ZeroShotImageClassification = 'zero-shot-image-classification',
  ZeroShotObjectDetection = 'zero-shot-object-detection',
}

/**
 * The generative AI engine types.
 * @category AI
 */
export enum GenerativeAIEngineType {
  Llamacpp = 'llamacpp',
  Transformers = 'transformers',
}

/**
 * The generative AI model interface.
 * @category AI
 */
export interface IGenerativeAIModel {
  id: string;
  engineType: GenerativeAIEngineType;
  taskType: GenerativeAITaskType;
  inputType: GenerativeAIModelInputType;
  outputType: GenerativeAIModelOutputType;
  sourceUrl: string;
  pathName?: string;
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
export interface IGenerativeAIWorkerConnector extends IJobWorkerConnector<GenAIJobParameters, GenAIResult> {
  /**
   * Initialize the machine learning model.
   * @param workflowId The workflow ID.
   * @param models A map of model IDs and pathnames.
   * @returns A promise that resolves when the model has been initialized.
   */
  initialize(workflowId: string, models: Map<string, IGenerativeAIModel>): Promise<void>;

  /**
   * Close the machine learning model.
   * @returns A promise that resolves when the model has been closed.
   */
  close(): Promise<void>;

  /**
   * Get the engine type.
   * @returns The engine type.
   */
  getEngineType(): GenerativeAIEngineType;

  /**
   * Process a job.
   * @param parameters The job parameters.
   * @param options The job options.
   * @returns A promise that resolves with the job result.
   */
  processJob(parameters: GenAIJobParameters, options?: IGenerativeAIWorkerOptions): Promise<IPromptResult>;

  /**
   * Stream a job.
   * @param parameters The job parameters.
   * @param options The job options.
   * @returns An async generator that yields the job result.
   */
  processJobStream(parameters: GenAIJobParameters, options?: IGenerativeAIWorkerOptions): AsyncGenerator<IPromptResult>;
}
