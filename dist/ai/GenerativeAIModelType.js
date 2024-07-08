/**
 * Represents the types of generative AI models.
 * @category AI
 */
export var GenerativeAIModelType;
(function (GenerativeAIModelType) {
    /**
     * The main model to run with the inference engine.
     */
    GenerativeAIModelType["Main"] = "main";
    /**
     * The simalirity model to run to build the vector database.
     */
    GenerativeAIModelType["Similarity"] = "similarity";
})(GenerativeAIModelType || (GenerativeAIModelType = {}));
