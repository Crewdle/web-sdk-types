import { IJobWorkerConnector, IJobWorkerOptions } from '../job';
import { IGenerativeAIWorkerConnectorPromptResult } from './jobs/prompt/GenerativeAIWorkerConnectorPromptResult';
import { IGenerativeAIPromptWorkerConnectorParameters } from './jobs/prompt/GenerativeAIPromptWorkerConnectorParameters';
import { GenerativeAIWorkerConnectorParameters, GenerativeAIWorkerConnectorResult } from './union-types';
/**
 * The generative AI model input types.
 * @category AI
 */
export declare enum GenerativeAIModelInputType {
    Text = "text",
    Audio = "audio",
    Image = "image"
}
/**
 * The generative AI model output types.
 * @category AI
 */
export declare enum GenerativeAIModelOutputType {
    Text = "text",
    Audio = "audio",
    Image = "image",
    Vector = "vector",
    Entity = "entity"
}
/**
 * The generative AI task types.
 * @category AI
 */
export declare enum GenerativeAITaskType {
    TextGeneration = "text-generation",
    Embeddings = "embeddings",
    FillMask = "fill-mask",
    QuestionAnswering = "question-answering",
    SentenceSimilarity = "sentence-similarity",
    Summarization = "summarization",
    TextClassification = "text-classification",
    SentimentAnalysis = "sentiment-analysis",
    TokenClassification = "token-classification",
    NamedEntityRecognition = "ner",
    Translation = "translation",
    ZeroShotClassification = "zero-shot-classification",
    FeatureExtraction = "feature-extraction",
    DepthEstimation = "depth-estimation",
    ImageClassification = "image-classification",
    ImageSegmentation = "image-segmentation",
    ImageToImage = "image-to-image",
    ObjectDetection = "object-detection",
    ImageFeatureExtraction = "image-feature-extraction",
    AudioClassification = "audio-classification",
    AutomaticSpeechRecognition = "automatic-speech-recognition",
    TextToSpeech = "text-to-speech",
    DocumentQuestionAnswering = "document-question-answering",
    ImageToText = "image-to-text",
    ZeroShotAudioClassification = "zero-shot-audio-classification",
    ZeroShotImageClassification = "zero-shot-image-classification",
    ZeroShotObjectDetection = "zero-shot-object-detection",
    SpeechToSpeech = "speech-to-speech",
    SpeechToText = "speech-to-text",
    ImageGeneration = "image-generation"
}
/**
 * The generative AI engine types.
 * @category AI
 */
export declare enum GenerativeAIEngineType {
    Llamacpp = "llamacpp",
    Transformers = "transformers",
    OpenAI = "openai",
    Anthropic = "anthropic",
    VertexAI = "vertexai",
    ElevenLabs = "elevenlabs",
    OpenRouter = "openrouter"
}
/**
 * The generative AI model interface.
 * @category AI
 */
export interface IGenerativeAIModel {
    id: string;
    engineType: GenerativeAIEngineType;
    taskType: GenerativeAITaskType;
    knowledgeCutoffDate?: string;
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
    sequences?: number;
}
/**
 * The generative AI worker connector interface.
 * @category Connector
 */
export interface IGenerativeAIWorkerConnector extends IJobWorkerConnector<GenerativeAIWorkerConnectorParameters, GenerativeAIWorkerConnectorResult> {
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
    processJob(parameters: IGenerativeAIPromptWorkerConnectorParameters, options?: IGenerativeAIWorkerOptions): Promise<IGenerativeAIWorkerConnectorPromptResult>;
    processJob(parameters: GenerativeAIWorkerConnectorParameters, options?: IGenerativeAIWorkerOptions): Promise<GenerativeAIWorkerConnectorResult>;
    /**
     * Stream a job.
     * @param parameters The job parameters.
     * @param options The job options.
     * @returns An async generator that yields the job result.
     */
    processJobStream(parameters: IGenerativeAIPromptWorkerConnectorParameters, options?: IGenerativeAIWorkerOptions): AsyncGenerator<IGenerativeAIWorkerConnectorPromptResult>;
    processJobStream(parameters: GenerativeAIWorkerConnectorParameters, options?: IGenerativeAIWorkerOptions): AsyncGenerator<GenerativeAIWorkerConnectorResult>;
}
