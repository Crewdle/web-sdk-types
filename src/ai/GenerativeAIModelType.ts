/**
 * Represents the types of generative AI models.
 */
export enum GenerativeAIModelType {
  /**
   * The main model to run with the inference engine.
   */
  Main = 'main',

  /**
   * The simalirity model to run to build the vector database.
   */
  Similarity = 'similarity',
}
