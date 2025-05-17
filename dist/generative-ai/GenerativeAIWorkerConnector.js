/**
 * The generative AI model input types.
 * @category AI
 */
export var GenerativeAIModelInputType;
(function (GenerativeAIModelInputType) {
    GenerativeAIModelInputType["Text"] = "text";
    GenerativeAIModelInputType["Audio"] = "audio";
    GenerativeAIModelInputType["Image"] = "image";
})(GenerativeAIModelInputType || (GenerativeAIModelInputType = {}));
/**
 * The generative AI model output types.
 * @category AI
 */
export var GenerativeAIModelOutputType;
(function (GenerativeAIModelOutputType) {
    GenerativeAIModelOutputType["Text"] = "text";
    GenerativeAIModelOutputType["Audio"] = "audio";
    GenerativeAIModelOutputType["Image"] = "image";
    GenerativeAIModelOutputType["Vector"] = "vector";
    GenerativeAIModelOutputType["Entity"] = "entity";
})(GenerativeAIModelOutputType || (GenerativeAIModelOutputType = {}));
/**
 * The generative AI task types.
 * @category AI
 */
export var GenerativeAITaskType;
(function (GenerativeAITaskType) {
    GenerativeAITaskType["TextGeneration"] = "text-generation";
    GenerativeAITaskType["Embeddings"] = "embeddings";
    GenerativeAITaskType["FillMask"] = "fill-mask";
    GenerativeAITaskType["QuestionAnswering"] = "question-answering";
    GenerativeAITaskType["SentenceSimilarity"] = "sentence-similarity";
    GenerativeAITaskType["Summarization"] = "summarization";
    GenerativeAITaskType["TextClassification"] = "text-classification";
    GenerativeAITaskType["SentimentAnalysis"] = "sentiment-analysis";
    GenerativeAITaskType["TokenClassification"] = "token-classification";
    GenerativeAITaskType["NamedEntityRecognition"] = "ner";
    GenerativeAITaskType["Translation"] = "translation";
    GenerativeAITaskType["ZeroShotClassification"] = "zero-shot-classification";
    GenerativeAITaskType["FeatureExtraction"] = "feature-extraction";
    GenerativeAITaskType["DepthEstimation"] = "depth-estimation";
    GenerativeAITaskType["ImageClassification"] = "image-classification";
    GenerativeAITaskType["ImageSegmentation"] = "image-segmentation";
    GenerativeAITaskType["ImageToImage"] = "image-to-image";
    GenerativeAITaskType["ObjectDetection"] = "object-detection";
    GenerativeAITaskType["ImageFeatureExtraction"] = "image-feature-extraction";
    GenerativeAITaskType["AudioClassification"] = "audio-classification";
    GenerativeAITaskType["AutomaticSpeechRecognition"] = "automatic-speech-recognition";
    GenerativeAITaskType["TextToSpeech"] = "text-to-speech";
    GenerativeAITaskType["DocumentQuestionAnswering"] = "document-question-answering";
    GenerativeAITaskType["ImageToText"] = "image-to-text";
    GenerativeAITaskType["ZeroShotAudioClassification"] = "zero-shot-audio-classification";
    GenerativeAITaskType["ZeroShotImageClassification"] = "zero-shot-image-classification";
    GenerativeAITaskType["ZeroShotObjectDetection"] = "zero-shot-object-detection";
    GenerativeAITaskType["SpeechToSpeech"] = "speech-to-speech";
    GenerativeAITaskType["SpeechToText"] = "speech-to-text";
})(GenerativeAITaskType || (GenerativeAITaskType = {}));
/**
 * The generative AI engine types.
 * @category AI
 */
export var GenerativeAIEngineType;
(function (GenerativeAIEngineType) {
    GenerativeAIEngineType["Llamacpp"] = "llamacpp";
    GenerativeAIEngineType["Transformers"] = "transformers";
    GenerativeAIEngineType["OpenAI"] = "openai";
    GenerativeAIEngineType["Anthropic"] = "anthropic";
    GenerativeAIEngineType["VertexAI"] = "vertexai";
})(GenerativeAIEngineType || (GenerativeAIEngineType = {}));
